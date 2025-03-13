import { buildQueryStringFromSelections } from "@shopwp/common"
import update from "immutability-helper"
import { rSet, rErr } from "@shopwp/common"

function querySettings() {
  return [
    "title",
    "productId",
    "tag",
    "vendor",
    "productType",
    "query",
    "availableForSale",
    "connective",
    "collection",
    "collectionsTitle",
    "collectionsReverse",
    "collectionsPageSize",
    "collectionsLimit",
    "collectionsSortBy",
    "collectionsId",
    "pageSize",
    "sortBy",
    "reverse",
    "limit",
  ]
}

function changedQuerySetting(key) {
  return querySettings().includes(key)
}

function buildQueryFromSelections(settings, blockType) {
  var selections = {}
  if (blockType === "collections") {
    if (settings.collectionsTitle) {
      selections.titles = settings.collectionsTitle
      selections.collection = false
      selections.id = settings.collectionsId
    } else {
      selections.titles = false
      selections.id = settings.collectionsId
    }

    selections.tags = false
    selections.vendors = false
    selections.types = false

    if (settings.collectionsExcludes.includes("products")) {
      delete selections.available_for_sale
    }
    // selections.id = false
  } else {
    selections.titles = settings.title

    if (settings.collection instanceof Array) {
      selections.collection = settings.collection.length
        ? settings.collection[0]
        : false
    } else {
      selections.collection = false
    }

    selections.tags = settings.tag
    selections.vendors = settings.vendor
    selections.types = settings.productType
    selections.available_for_sale = settings.availableForSale

    if (settings.productId) {
      selections.id = settings.productId
    } else if (settings.collectionsId) {
      selections.id = settings.collectionsId
    }
  }

  var query = buildQueryStringFromSelections(selections, settings, blockType)

  return query
}

function findQueryParamToUpdate(
  { key, value },
  queryParams,
  originalQueryParams,
  newSettings,
  blockType
) {
  var obj = { ...queryParams }

  switch (key) {
    case "sortBy":
      obj["sortKey"] = value

      break
    case "reverse":
      obj["reverse"] = value

      break
    case "pageSize":
      obj["first"] = value

      break

    case "limit":
      if (!value) {
        obj["first"] = originalQueryParams.first
      } else {
        if (value > queryParams.first) {
          obj["first"] = originalQueryParams.first
        } else {
          obj["first"] = value
        }
      }

      break
    case "collection":
      obj["collection_titles"] = value[0]

      break

    case "collectionsSortBy":
      obj["collectionsSortBy"] = value

      break
    case "collectionsReverse":
      obj["collectionsReverse"] = value

      break
    case "collectionsPageSize":
      obj["collectionsPageSize"] = value

    case "collectionsLimit":
      obj["collectionsLimit"] = value

      break

    default:
      break
  }

  obj["query"] = buildQueryFromSelections(newSettings, blockType)

  return obj
}

function BlockReducer(state, action) {
  switch (action.type) {
    case "UPDATE_SETTING": {
      if (action.payload instanceof Array) {
        var newSettings = state.settings

        action.payload.forEach((pay) => {
          newSettings = update(newSettings, {
            $merge: {
              [pay.key]: pay.value,
            },
          })
        })
      } else {
        if (typeof action.payload.value === "undefined") {
          var valueToSet = state.defaultSettings[action.payload.key]
        } else {
          var valueToSet = action.payload.value
        }

        var newSettings = update(state.settings, {
          $merge: {
            [action.payload.key]: valueToSet,
          },
        })
      }

      if (changedQuerySetting(action.payload.key)) {
        var queryParamObject = findQueryParamToUpdate(
          action.payload,
          state.queryParams,
          state.originalQueryParams,
          newSettings,
          state.blockProps.attributes.blockType
        )

        var built = buildQueryFromSelections(
          newSettings,
          state.blockProps.attributes.blockType
        )

        if (state.blockProps.attributes.blockType === "collections") {
          newSettings.collectionsQuery = update(
            state.settings.collectionsQuery,
            {
              $set: built,
            }
          )

          newSettings.collectionsPageSize = update(
            state.settings.collectionsPageSize,
            {
              $set: queryParamObject?.collectionsFirst
                ? queryParamObject.collectionsFirst
                : queryParamObject.first,
            }
          )

          newSettings.collectionsReverse = update(
            state.settings.collectionsPageSize,
            {
              $set: queryParamObject?.collectionsReverse
                ? queryParamObject.collectionsReverse
                : queryParamObject.reverse,
            }
          )

          newSettings.collectionsSortBy = update(
            state.settings.collectionsSortBy,
            {
              $set: queryParamObject?.collectionsSortKey
                ? queryParamObject.collectionsSortKey
                : queryParamObject.sortKey,
            }
          )

          newSettings.collectionsLimit = update(
            state.settings.collectionsLimit,
            {
              $set: queryParamObject?.collectionsLimit
                ? queryParamObject.collectionsLimit
                : queryParamObject.limit,
            }
          )
        } else {
          newSettings.query = update(state.settings.query, {
            $set: built,
          })
        }
      } else {
        var queryParamObject = state.queryParams
      }

      var okqueryParamObject = update(state.queryParams, {
        $set: queryParamObject,
      })

      return {
        ...state,
        queryParams: okqueryParamObject,
        settings: newSettings,
        notice: false,
      }
    }

    case "SET_NOTICE": {
      return rSet("notice", action, state)
    }

    case "SET_QUERY_TYPE": {
      return rSet("queryType", action, state)
    }

    case "SET_IS_LOADING": {
      return rSet("isLoading", action, state)
    }

    case "SET_HAS_PREVIOUS_PAGE": {
      return rSet("hasPreviousPage", action, state)
    }

    case "SET_COMPONENT_ELEMENT": {
      return rSet("componentElement", action, state)
    }

    default: {
      rErr(action, "Block")
    }
  }
}

export default BlockReducer
