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

export { defaultColors, convertValuesToString }
