import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function SubscriptionsSelectOnLoad({ subscriptionsSelectOnLoad }) {
  const { ToggleControl } = wp.components

  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "subscriptionsSelectOnLoad", value: newVal },
    })
  }

  return (
    <ToggleControl
      label={blockState.t.a.selectSubOnLoad}
      checked={subscriptionsSelectOnLoad}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(SubscriptionsSelectOnLoad)
