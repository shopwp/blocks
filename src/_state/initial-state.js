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
    componentElement: document.getElementById("block-" + blockProps.clientId),
    shouldForceUpdate: false,
    componentType: "products",
    blockProps: blockProps,
    settings: blockData,
    isFirstRender: blockProps.attributes.isFirstRender,
    defaultSettings: blockProps.attributes.defaultSettings,
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
