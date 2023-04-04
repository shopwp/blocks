import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function CarouselSlidesToShow({ slides }) {
  const { TextControl } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "carouselSlidesToShow", value: parseInt(newVal) },
    })
  }

  return (
    <TextControl
      type="Number"
      label={blockState.t.a.numOfSlidesToShow}
      value={slides}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(CarouselSlidesToShow)
