import { useBlockState, useBlockDispatch } from "BlockState"

function MaxQuantity({ max }) {
  const { TextControl } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "maxQuantity", value: newVal },
    })
  }

  return (
    <TextControl
      type="Number"
      label={blockState.t.a.maxQuant}
      value={max}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(MaxQuantity)
