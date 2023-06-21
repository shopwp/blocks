import compact from "lodash-es/compact"
import isArray from "lodash-es/isArray"

function defaultColors() {
  const themeSettings = wp.data.select("core/block-editor").getSettings()

  return themeSettings.colors
}

function convertValuesToString(vals) {
  if (!vals) {
    return ""
  }

  if (typeof vals === "string") {
    return vals
  }

  if (isArray(vals)) {
    return vals.join(", ")
  } else {
    return vals
  }
}

function splitSelection(string) {
  return string.split(",")
}

function removeEmptyValues(stringSelection) {
  if (stringSelection === "") {
    return false
  }

  var stuff = compact(splitSelection(stringSelection))

  var final = stuff.map((val) => val.trim())

  return compact(final)
}

export { defaultColors, removeEmptyValues, convertValuesToString }
