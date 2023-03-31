import { defaultColors } from "../_common"
import { useBlockState, useBlockDispatch } from "../../_state/hooks"

function AddToCartButtonColor({ color }) {
  const { BaseControl, ColorPalette } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newColor) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "addToCartButtonColor", value: newColor },
    })
  }

  return (
    <BaseControl label={blockState.t.a.addCartColor}>
      <ColorPalette
        colors={defaultColors(blockState)}
        value={color}
        onChange={onChange}
      />
    </BaseControl>
  )
}

export default wp.element.memo(AddToCartButtonColor)
