import { encodeSettings, buildQueryStringFromSelections } from "@shopwp/common"
import update from "immutability-helper"
import { rSet, rErr } from "@shopwp/common"

function querySettings() {
  return [
    "title",
    "tag",
    "vendor",
    "productType",
    "query",
    "availableForSale",
    "connective",
    "collection",
    "pageSize",
    "sortBy",
    "reverse",
    "limit",
  ]
}

function changedQuerySetting(key) {
  return querySettings().includes(key)
}

function buildQueryFromSelections(options) {
  var selections = {}

  selections.titles = options.title
  selections.collection = options.collection ? options.collection[0] : false
  selections.tags = options.tag
  selections.vendors = options.vendor
  selections.types = options.productType
  selections.available_for_sale = options.availableForSale

  return buildQueryStringFromSelections(selections, options)
}

function findQueryParamToUpdate(
  { key, value },
  queryParams,
  originalQueryParams,
  newSettings
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
        if (value < queryParams.first) {
          obj["first"] = value
        } else {
          obj["first"] = queryParams.first
        }
      }

      break
    case "collection":
      obj["collection_titles"] = value[0]

      break
    default:
      break
  }

  obj["query"] = buildQueryFromSelections(newSettings)

  return obj
}

function BlockReducer(state, action) {
  switch (action.type) {
    case "UPDATE_SETTING": {
      if (typeof action.payload.value === "undefined") {
        // get default instead
        var valueToSet = state.defaultSettings[action.payload.key]
      } else {
        var valueToSet = action.payload.value
      }

      var newSettings = update(state.settings, {
        $merge: {
          [action.payload.key]: valueToSet,
        },
      })

      if (changedQuerySetting(action.payload.key)) {
        var queryParamObject = findQueryParamToUpdate(
          action.payload,
          state.queryParams,
          state.originalQueryParams,
          newSettings
        )

        var built = buildQueryFromSelections(newSettings)

        newSettings.query = update(state.settings.query, {
          $set: built,
        })

        //   action.payload.key
      } else {
        var queryParamObject = state.queryParams
      }

      var okqueryParamObject = update(state.queryParams, {
        $set: queryParamObject,
      })

      var settingsId = encodeSettings(newSettings)

      return {
        ...state,
        queryParams: okqueryParamObject,
        settings: newSettings,
        settingsId: settingsId,
      }
    }

    case "SET_NOTICE": {
      return rSet("notice", action, state)
    }

    case "SET_PAYLOAD": {
      return rSet("payload", action, state)
    }

    case "APPEND_PAYLOAD": {
      return {
        ...state,
        payload: update(state.payload, { $push: action.payload }),
      }
    }

    case "SET_QUERY_TYPE": {
      return rSet("queryType", action, state)
    }

    case "SET_IS_LOADING": {
      return rSet("isLoading", action, state)
    }

    case "SET_CURSOR": {
      return {
        ...state,
        cursor: update(state.cursor, {
          $set: action.payload,
        }),
      }
    }

    case "UPDATE_TOTAL_SHOWN": {
      const newTotal = action.payload + state.totalShown

      return {
        ...state,
        totalShown: update(state.totalShown, { $set: newTotal }),
      }
    }

    case "SET_HAS_NEXT_PAGE": {
      return rSet("hasNextPage", action, state)
    }

    case "SET_HAS_PREVIOUS_PAGE": {
      return rSet("hasPreviousPage", action, state)
    }

    case "SET_COLLECTION_TITLES": {
      return rSet("collectionTitles", action, state)
    }

    default: {
      rErr(action, "Block")
    }
  }
}

export default BlockReducer
