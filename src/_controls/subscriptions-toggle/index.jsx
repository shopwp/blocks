import { useBlockState, useBlockDispatch } from "BlockState"

function SubscriptionsToggle({ subscriptions }) {
  const { ToggleControl } = wp.components

  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "subscriptions", value: newVal },
    })
  }

  return (
    <ToggleControl
      label={blockState.t.a.showSubsWidget}
      checked={subscriptions}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(SubscriptionsToggle)
