import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function ProductsLinkWithBuyButton({ linkWithBuyButton }) {
  const { ToggleControl } = wp.components

  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "linkWithBuyButton", value: newVal },
    })
  }

  return (
    <ToggleControl
      label={blockState.t.a.linkBuyButton}
      checked={linkWithBuyButton}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(ProductsLinkWithBuyButton)
