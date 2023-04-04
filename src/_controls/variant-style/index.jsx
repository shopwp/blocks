import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function VariantStyle({ style }) {
  const { SelectControl } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  const options = [
    {
      label: blockState.t.a.dropdown,
      value: "dropdown",
    },
    { label: blockState.t.a.buttons, value: "buttons" },
  ]

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "variantStyle", value: newVal },
    })
  }

  return (
    <SelectControl
      label={blockState.t.a.variantsStyle}
      value={style}
      options={options}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(VariantStyle)
