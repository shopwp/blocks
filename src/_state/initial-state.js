import { encodeSettings, decodeSettings } from "@shopwp/common"

function getSavedBlockSettings(defaultSettings, settingsId) {
  var decodedAppliedSettings = decodeSettings(settingsId)

  var allSettings = {
    ...defaultSettings,
    ...decodedAppliedSettings,
  }

  return [allSettings, settingsId]
}

function getDefaultBlockSettings(defaultSettings) {
  return [defaultSettings, encodeSettings(defaultSettings)]
}

function getBlockSettings(settingsId, defaultSettings) {
  // If a block has been saved already ...
  if (settingsId) {
    return getSavedBlockSettings(defaultSettings, settingsId)
  }

  return getDefaultBlockSettings(defaultSettings)
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

function maybeUpdateBlockDefaults(blockProps) {
  if (isSingleComponent(blockProps.name)) {
    var excludes = generateExcludes(blockProps.name)

    if (blockProps.name.includes("collection")) {
      return [
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
      ]
    } else {
      return [
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
      ]
    }
  }

  return []
}

/*

Setup initial block state

*/
function BlockInitialState({ blockProps }) {
  const [blockData, settingsId] = getBlockSettings(
    blockProps.attributes.settingsId,
    blockProps.attributes.defaultSettings
  )

  var stuff = maybeUpdateBlockDefaults(blockProps)

  stuff.forEach((setting) => {
    blockData[setting.key] = setting.value
  })

  if (blockProps.name === "shopwp/cart-icon") {
    var queryParams = false
  } else {
    if (
      blockProps.name === "shopwp/collections" ||
      blockProps.name === "shopwp/collection-image" ||
      blockProps.name === "shopwp/collection-title" ||
      blockProps.name === "shopwp/collection-description"
    ) {
      if (
        blockData.collectionsLimit &&
        blockData.collectionsLimit < blockData.collectionsPageSize
      ) {
        var collectionsPageSize = blockData.collectionsLimit
      } else {
        var collectionsPageSize = blockData.collectionsPageSize
      }

      var queryParams = {
        query: blockData.collectionsQuery,
        sortKey: blockData.collectionsSortBy.toUpperCase(),
        reverse: blockData.collectionsReverse,
        first: collectionsPageSize,
        country: shopwp.general.countryCode.toUpperCase(),
        language: shopwp.general.languageCode.toUpperCase(),
      }

      var queryType = "collections"
      var collectionTitles = false
      blockData.collection = false
    } else {
      if (blockData.limit && blockData.limit < blockData.pageSize) {
        var pageSize = blockData.limit
      } else {
        var pageSize = blockData.pageSize
      }

      var queryParams = {
        query: blockData.query,
        sortKey: blockData.sortBy.toUpperCase(),
        reverse: blockData.reverse,
        first: pageSize,
        collection_titles: blockData.collection
          ? blockData.collection[0]
          : false,
        country: shopwp.general.countryCode.toUpperCase(),
        language: shopwp.general.languageCode.toUpperCase(),
      }

      var queryType = blockData.collection ? "collectionProducts" : "products"
      var collectionTitles = blockData.collection ? blockData.collection : false
    }
  }

  return {
    notice: false,
    isLoading: false,
    componentElement: false,
    shouldForceUpdate: false,
    componentType: "products",
    blockProps: blockProps,
    settings: blockData,
    settingsId: settingsId,
    isFirstRender: blockProps.attributes.isFirstRender,
    defaultSettings: blockProps.attributes.defaultSettings,
    defaultSettingsId: settingsId,
    payload: [],
    queryParams: queryParams,
    originalQueryParams: queryParams,
    queryType: queryType,
    collectionTitles: collectionTitles,
    hasNextPage: false,
    totalShown: 0,
    isFetchingNext: false,
    t: wp.hooks.applyFilters("shop.textContent", shopwp.t),
  }
}

export default BlockInitialState
