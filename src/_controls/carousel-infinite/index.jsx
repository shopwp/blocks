import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function CarouselInfinite({ infinite }) {
  const { ToggleControl } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(isChecked) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "carouselInfinite", value: isChecked },
    })
  }

  return (
    <ToggleControl
      label={blockState.t.l.scrollInfinite}
      checked={infinite}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(CarouselInfinite)
