import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function AvailableForSale({ state }) {
  const { RadioControl } = wp.components

  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "availableForSale", value: newVal },
    })
  }

  return (
    <RadioControl
      label={blockState.t.l.availSale}
      help={blockState.t.a.availSaleHelp}
      selected={state}
      options={[
        { label: blockState.t.a.any, value: "any" },
        { label: blockState.t.l.inStock, value: "true" },
        { label: blockState.t.l.outOfStock, value: "false" },
      ]}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(AvailableForSale)
