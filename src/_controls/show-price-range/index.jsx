import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function ShowPriceRange({ showPriceRange }) {
  const { ToggleControl } = wp.components

  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "showPriceRange", value: newVal },
    })
  }

  return (
    <ToggleControl
      label={blockState.t.a.showPriceRange}
      checked={showPriceRange}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(ShowPriceRange)
