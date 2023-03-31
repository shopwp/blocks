import { encodeSettings, decodeSettings } from "Common"

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

function customDefaultSettingsProductSingle(settings) {
  var copySettings = settings

  copySettings.limit = 1
  copySettings.itemsPerRow = 1
  copySettings.productsLinkTo = "none"
  copySettings.excludes = ["description"]

  return copySettings
}

function customDefaultSettingsBuyButton(settings) {
  var copySettings = settings

  copySettings.limit = 1
  copySettings.itemsPerRow = 1
  copySettings.excludes = ["title", "images", "description", "pricing"]
  copySettings.productsLinkTo = "none"

  return copySettings
}

function customDefaultSettingsProducts(settings) {
  var copySettings = settings
  copySettings.productsLinkTo = "none"
  copySettings.excludes = ["description"]
  copySettings.itemsPerRow = 3
  copySettings.limit = false

  return copySettings
}

function customizeDefaultSettings(blockProps) {
  if (blockProps.name === "shopwp/products") {
    return customDefaultSettingsProducts(blockProps.attributes.defaultSettings)
  } else if (blockProps.name === "shopwp/single-product") {
    return customDefaultSettingsProductSingle(
      blockProps.attributes.defaultSettings
    )
  } else if (blockProps.name === "shopwp/buy-button") {
    return customDefaultSettingsBuyButton(blockProps.attributes.defaultSettings)
  } else {
    return blockProps.attributes.defaultSettings
  }
}

/*

Setup inital block state

*/
function BlockInitialState({ blockProps }) {
  blockProps.attributes.defaultSettings = customizeDefaultSettings(blockProps)

  const [blockData, settingsId] = getBlockSettings(
    blockProps.attributes.settingsId,
    blockProps.attributes.defaultSettings
  )

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
    collection_titles: blockData.collection ? blockData.collection[0] : false,
    country: shopwp.general.countryCode.toUpperCase(),
    language: shopwp.general.languageCode.toUpperCase(),
  }

  return {
    notice: false,
    isLoading: false,
    componentElement: false,
    shouldForceUpdate: false,
    componentType: "products",
    queryType: "products",
    blockProps: blockProps,
    settings: blockData,
    settingsId: settingsId,
    isFirstRender: blockProps.attributes.isFirstRender,
    defaultSettings: blockProps.attributes.defaultSettings,
    defaultSettingsId: settingsId,
    payload: [],
    queryParams: queryParams,
    originalQueryParams: queryParams,
    queryType: blockData.collection ? "collectionProducts" : "products",
    collectionTitles: blockData.collection ? blockData.collection : false,
    hasNextPage: false,
    totalShown: 0,
    isFetchingNext: false,
    t: wp.hooks.applyFilters("shop.textContent", shopwp.t),
  }
}

export default BlockInitialState
