import { useBlockState, useBlockDispatch } from "BlockState"

function FullWidth({ fullWidth }) {
  const { ToggleControl } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(isChecked) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "fullWidth", value: isChecked },
    })
  }

  return (
    <ToggleControl
      label={blockState.t.l.fullWidth}
      checked={fullWidth}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(FullWidth)
