import compact from "lodash-es/compact"
import isEmpty from "lodash-es/isEmpty"

function defaultColors(blockState) {
  return [
    { name: blockState.t.a.palePink, color: "#f78da8" },
    { name: blockState.t.a.vividRed, color: "#cf2e2e" },
    { name: blockState.t.a.luminousVivid, color: "#ff6a00" },
    { name: blockState.t.a.luminousVividAmber, color: "#fcb900" },
    { name: blockState.t.a.lightGreenCyan, color: "#7bdcb5" },
    { name: blockState.t.a.vividGreenCyan, color: "#00d084" },
    { name: blockState.t.a.paleCyanBlue, color: "#8ed2fc" },
    { name: blockState.t.a.cyanBlue, color: "#0692e3" },
    { name: blockState.t.a.lightGrey, color: "#7d7d7d" },
    { name: blockState.t.a.mediumBlueGrey, color: "#525252" },
    { name: blockState.t.a.darkGrey, color: "#262626" },
  ]
}

function convertValuesToString(vals) {
  if (!vals || isEmpty(vals)) {
    return ""
  }

  if (typeof vals === "string") {
    return vals
  }

  return vals.join(", ")
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
