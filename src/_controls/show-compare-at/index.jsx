import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function ShowCompareAt({ showCompareAt }) {
  const { ToggleControl } = wp.components

  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "showCompareAt", value: newVal },
    })
  }

  return (
    <ToggleControl
      label={blockState.t.a.showCompareAt}
      help={blockState.t.a.showCompareAtHelp}
      checked={showCompareAt}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(ShowCompareAt)
