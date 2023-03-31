import { useBlockState, useBlockDispatch } from "BlockState"

function Carousel({ carousel }) {
  const { ToggleControl } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(isChecked) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "carousel", value: isChecked },
    })
  }

  return (
    <ToggleControl
      label={blockState.t.l.carousel}
      checked={carousel}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(Carousel)
