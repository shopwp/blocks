import { useBlockState, useBlockDispatch } from "BlockState"

function HideQuantity({ hide }) {
  const { ToggleControl } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "hideQuantity", value: newVal },
    })
  }

  return (
    <ToggleControl
      label={blockState.t.a.hideQuant}
      checked={hide}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(HideQuantity)
