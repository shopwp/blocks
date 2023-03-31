import { defaultColors } from "../_common"
import { useBlockState, useBlockDispatch } from "../../_state/hooks"

function DescriptionColor({ color }) {
  const { BaseControl, ColorPalette } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newColor) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "descriptionColor", value: newColor },
    })
  }

  return (
    <BaseControl label={blockState.t.a.descColor}>
      <ColorPalette
        colors={defaultColors(blockState)}
        value={color}
        onChange={onChange}
      />
    </BaseControl>
  )
}

export default wp.element.memo(DescriptionColor)
