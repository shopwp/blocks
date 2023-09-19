import { useBlockState, useBlockDispatch } from "@shopwp/blocks"
import { encodeSettings, compareSettings } from "@shopwp/common"
import { useAction } from "@shopwp/hooks"

function ControlsWrapper({ children }) {
  const { InspectorControls } = wp.blockEditor
  const { useSelect, useDispatch, select } = wp.data
  const { useState, useEffect, useRef } = wp.element
  const dispatch = useDispatch()
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()
  const isFirstRender = useRef(true)
  const onBeforePayloadUpdate = useAction("on.beforePayloadUpdate", null)
  const onAfterPayloadUpdate = useAction("on.afterPayloadUpdate", null)

  const [layoutType, setLayoutType] = useState(
    blockState.blockProps.attributes.layoutType
  )

  const postId = useSelect(
    (select) => select("core/editor").getCurrentPostId(),
    []
  )

  const postType = useSelect(
    (select) => select("core/editor").getCurrentPostType(),
    []
  )

  const entityRecordEdits = useSelect(
    (select) =>
      postType === "shopwp_shortcodes" &&
      select("core").getEditedEntityRecord(
        "postType",
        "shopwp_shortcodes",
        postId
      ),
    []
  )

  const lockBlockAndNestedBlocks = (clientId) => {
    // Recursive function to update lock attribute for blocks and their nested blocks
    const updateLockAttributesRecursive = (clientId) => {
      const block = select("core/block-editor").getBlock(clientId)

      // Update the lock attribute to lock the block
      const updatedBlock = {
        ...block,
        attributes: {
          ...block.attributes,
          locked: true,
        },
      }

      // Update the block with the new attributes
      dispatch("core/block-editor").updateBlockAttributes(
        clientId,
        updatedBlock.attributes
      )

      // Recursively update lock attributes for nested blocks
      if (block.innerBlocks && block.innerBlocks.length > 0) {
        block.innerBlocks.forEach((nestedBlock) => {
          updateLockAttributesRecursive(nestedBlock.clientId)
        })
      }
    }

    // Update lock attributes for the target block and its nested blocks
    updateLockAttributesRecursive(clientId)
  }

  function isSingleComponent(blockType) {
    return [
      "shopwp/buy-button",
      "shopwp/title",
      "shopwp/pricing",
      "shopwp/description",
      "shopwp/images",
      "shopwp/collection-title",
      "shopwp/collection-description",
      "shopwp/collection-image",
    ].includes(blockType)
  }

  function generateExcludes(blockName) {
    var split = blockName.split("shopwp/")

    if (split.length) {
      split = split[1]
    } else {
      split = ""
    }

    if (split.includes("collection")) {
      var splitAgain = split.split("collection-")

      if (splitAgain.length) {
        split = splitAgain[1]
      } else {
        split = ""
      }
    }

    return [
      "buy-button",
      "images",
      "image",
      "products",
      "description",
      "pricing",
      "title",
    ].filter((c) => c !== split)
  }
  function maybeUpdateBlockDefaults() {
    if (isSingleComponent(blockState.blockProps.name)) {
      var excludes = generateExcludes(blockState.blockProps.name)

      if (blockState.blockProps.name.includes("collection")) {
        blockDispatch({
          type: "UPDATE_SETTING",
          payload: [
            {
              key: "limit",
              value: 1,
            },
            {
              key: "collectionsPagination",
              value: false,
            },
            {
              key: "collectionsItemsPerRow",
              value: 1,
            },
            {
              key: "collectionsExcludes",
              value: excludes,
            },
          ],
        })
      } else {
        blockDispatch({
          type: "UPDATE_SETTING",
          payload: [
            {
              key: "limit",
              value: 1,
            },
            {
              key: "pagination",
              value: false,
            },
            {
              key: "itemsPerRow",
              value: 1,
            },
            {
              key: "excludes",
              value: excludes,
            },
            {
              key: "linkTo",
              value: "none",
            },
          ],
        })
      }
    }
  }
  useEffect(() => {
    if (onBeforePayloadUpdate === null) {
      return
    }

    blockDispatch({
      type: "SET_IS_LOADING",
      payload: true,
    })
  }, [onBeforePayloadUpdate])

  useEffect(() => {
    if (onAfterPayloadUpdate === null) {
      return
    }

    blockDispatch({
      type: "SET_IS_LOADING",
      payload: false,
    })
  }, [onAfterPayloadUpdate])

  /*
  
  Should only run if using the layout builder
  
  */
  useEffect(() => {
    maybeUpdateBlockDefaults()

    if (isFirstRender.current) {
      isFirstRender.current = false
    }

    if (!entityRecordEdits) {
      return
    }

    if (entityRecordEdits.meta.layout_type === "") {
      const blockOrder = select("core/block-editor").getBlockOrder()

      if (blockOrder.length > 0) {
        const firstBlockClientId = blockOrder[0]
        lockBlockAndNestedBlocks(firstBlockClientId)
      }
    }
  }, [])

  /*
  
  Should only run if using the layout builder
  
  */
  useEffect(() => {
    if (!entityRecordEdits || Object.keys(entityRecordEdits).length === 0) {
      return
    }

    setLayoutType(entityRecordEdits.meta.layout_type)

    if (
      entityRecordEdits.meta.layout_type === "template-clp" ||
      entityRecordEdits.meta.layout_type === "shortcode"
    ) {
      blockDispatch({
        type: "UPDATE_SETTING",
        payload: {
          key: "collectionId",
          value: false,
        },
      })

      blockDispatch({
        type: "UPDATE_SETTING",
        payload: {
          key: "productId",
          value: false,
        },
      })
      return
    }

    if (entityRecordEdits.meta.layout_type === "template-cdp") {
      // Updates collection
      blockDispatch({
        type: "UPDATE_SETTING",
        payload: {
          key: "collectionId",
          value: entityRecordEdits.meta.layout_preview_collection_id.toString(),
        },
      })

      // Updates products
      blockDispatch({
        type: "UPDATE_SETTING",
        payload: {
          key: "collection",
          value: [entityRecordEdits.meta.layout_preview_collection_title],
        },
      })
    } else if (entityRecordEdits.meta.layout_type === "template-pdp") {
      if (entityRecordEdits.meta.layout_preview_product_id) {
        blockDispatch({
          type: "UPDATE_SETTING",
          payload: {
            key: "productId",
            value: entityRecordEdits.meta.layout_preview_product_id.toString(),
          },
        })
      }
    }
  }, [entityRecordEdits.meta])

  /*
  
  Should run for any and all blocks
  
  */
  useEffect(() => {
    var settings = compareSettings(
      blockState.settings,
      blockState.defaultSettings
    )

    if (!settings || Object.keys(settings).length === 0) {
      return
    }

    var newSettingsId = encodeSettings(settings)

    if (newSettingsId instanceof Error) {
      console.error("ShopWP Error: ", newSettingsId)
      return
    }

    blockState.blockProps.setAttributes({
      settingsId: newSettingsId,
    })
  }, [blockState.settings])

  return (
    <InspectorControls>
      {wp.element.cloneElement(children, {
        layoutType: layoutType,
      })}
    </InspectorControls>
  )
}

export default ControlsWrapper
