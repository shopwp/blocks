import { useBlockState, useBlockDispatch } from "../../_state/hooks"

function AlignHeight({ height }) {
  const { ToggleControl } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(isChecked) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "alignHeight", value: isChecked },
    })
  }

  return (
    <ToggleControl
      label={blockState.t.a.alignHeight}
      checked={height}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(AlignHeight)
