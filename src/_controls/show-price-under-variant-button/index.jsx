import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function ShowPriceUnderVariantButton({ showPriceUnderVariantButton }) {
  const { ToggleControl } = wp.components

  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "showPriceUnderVariantButton", value: newVal },
    })
  }

  return (
    <ToggleControl
      label={blockState.t.a.showPriceUnder}
      checked={showPriceUnderVariantButton}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(ShowPriceUnderVariantButton)
