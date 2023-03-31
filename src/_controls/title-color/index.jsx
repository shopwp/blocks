import { defaultColors } from "../_common"
import { useBlockState, useBlockDispatch } from "../../_state/hooks"

function TitleColor({ titleColor }) {
  const { BaseControl, ColorPalette } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newColor) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "titleColor", value: newColor },
    })
  }

  return (
    <BaseControl label={blockState.t.l.titleColor}>
      <ColorPalette
        colors={defaultColors(blockState)}
        value={titleColor}
        onChange={onChange}
      />
    </BaseControl>
  )
}

export default wp.element.memo(TitleColor)
