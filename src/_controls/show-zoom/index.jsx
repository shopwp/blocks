import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function ShowZoom({ showZoom }) {
  const { ToggleControl } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "showZoom", value: newVal },
    })
  }

  return (
    <ToggleControl
      label={blockState.t.a.showZoom}
      help={blockState.t.a.showZoomHelp}
      checked={showZoom}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(ShowZoom)
