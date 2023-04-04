import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function CarouselDots({ dots }) {
  const { ToggleControl } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(isChecked) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "carouselDots", value: isChecked },
    })
  }

  return (
    <ToggleControl
      label={blockState.t.l.showCarouselDots}
      checked={dots}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(CarouselDots)
