import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function ProductsLinkTo({ linkTo }) {
  const { SelectControl } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  const options = [
    { label: "WordPress", value: "wordpress" },
    { label: "Shopify", value: "shopify" },
    { label: blockState.t.a.none, value: "none" },
    { label: blockState.t.a.modal, value: "modal" },
  ]

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "linkTo", value: newVal },
    })
  }

  return (
    <SelectControl
      label={blockState.t.a.shouldLinkTo}
      help={linkTo === "wordpress" && blockState.t.a.shouldLinkToHelp}
      value={linkTo}
      options={options}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(ProductsLinkTo)
