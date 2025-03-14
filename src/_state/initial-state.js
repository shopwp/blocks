import { encodeSettings, decodeSettings } from "@shopwp/common"

function getSavedBlockSettings(defaultSettings, settingsId) {
  var decodedAppliedSettings = decodeSettings(settingsId)

  if (decodedAppliedSettings instanceof Error) {
    console.error(decodedAppliedSettings.message)
    return [defaultSettings, settingsId]
  } else {
    var allSettings = {
      ...defaultSettings,
      ...decodedAppliedSettings,
    }

    return [allSettings, settingsId]
  }
}

function getDefaultBlockSettings(defaultSettings) {
  let encoded = encodeSettings(defaultSettings)

  if (encoded instanceof Error) {
    console.error(encoded.message)
    return false
  } else {
    return [defaultSettings, encoded]
  }
}

function getBlockSettings(settingsId, defaultSettings) {
  // If a block has been saved already ...
  if (settingsId) {
    return getSavedBlockSettings(defaultSettings, settingsId)
  }

  return getDefaultBlockSettings(defaultSettings)
}

/*

Setup initial block state

*/
function BlockInitialState({ blockProps }) {
  const [blockData, settingsId] = getBlockSettings(
    blockProps.attributes.settingsId,
    blockProps.attributes.defaultSettings
  )

  if (
    blockProps.name === "shopwp/cart-icon" ||
    blockProps.name === "shopwp/reviews"
  ) {
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
      // TODO: this is impportant. rethink how we're setting this. if a collection is passed in, a different graphql query is ran
      var queryType = blockData.collection ? "collectionProducts" : "products"
    }
  }

  return {
    notice: false,
    isLoading: false,
    componentElement: document.getElementById("block-" + blockProps.clientId),
    shouldForceUpdate: false,
    componentType: "products",
    blockProps: blockProps,
    settings: blockData,
    isFirstRender: blockProps.attributes.isFirstRender,
    defaultSettings: blockProps.attributes.defaultSettings,
    queryParams: queryParams,
    originalQueryParams: queryParams,
    queryType: queryType,
    t: wp.hooks.applyFilters("shop.textContent", shopwp.t),
  }
}

export default BlockInitialState
