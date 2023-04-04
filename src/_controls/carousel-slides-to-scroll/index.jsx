import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function CarouselSlidesToScroll({ slides }) {
  const { TextControl } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "carouselSlidesToScroll", value: parseInt(newVal) },
    })
  }

  return (
    <TextControl
      type="Number"
      label={blockState.t.a.numOfSlides}
      value={slides}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(CarouselSlidesToScroll)
