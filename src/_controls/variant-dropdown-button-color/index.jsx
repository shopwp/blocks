import { useBlockState, useBlockDispatch } from "../../_state/hooks"
import { defaultColors } from "../_common"

function VariantDropdownButtonColor({ color, style }) {
  const { BaseControl, ColorPalette } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newColor) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "variantDropdownButtonColor", value: newColor },
    })
  }

  return (
    style === "dropdown" && (
      <BaseControl
        label={blockState.t.a.variantDropdownsBtnColor}
        className="color-variants"
      >
        <ColorPalette
          colors={defaultColors(blockState)}
          value={color}
          onChange={onChange}
        />
      </BaseControl>
    )
  )
}

export default wp.element.memo(VariantDropdownButtonColor)
