import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function MinQuantity({ min }) {
  const { TextControl } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    if (!newVal || newVal === 0 || newVal === "0") {
      newVal = 1
    }
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "minQuantity", value: newVal },
    })
  }

  return (
    <TextControl
      type="Number"
      label={blockState.t.a.minQuant}
      value={min}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(MinQuantity)
