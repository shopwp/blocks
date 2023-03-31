import { useBlockState, useBlockDispatch } from "BlockState"

function ImagesSizingWidth({ width, toggle }) {
  const { TextControl } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "imagesSizingWidth", value: parseInt(newVal) },
    })
  }

  return (
    <TextControl
      type="Number"
      label={blockState.t.a.width}
      value={width}
      onChange={onChange}
      disabled={toggle === false}
    />
  )
}

export default wp.element.memo(ImagesSizingWidth)
