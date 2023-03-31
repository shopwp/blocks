import { useBlockState, useBlockDispatch } from "BlockState"

function DirectCheckout({ directCheckout }) {
  const { ToggleControl } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(isChecked) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "directCheckout", value: isChecked },
    })
  }

  return (
    <ToggleControl
      label={blockState.t.a.enableDirectCheckout}
      checked={directCheckout}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(DirectCheckout)
