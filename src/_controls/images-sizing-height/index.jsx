import { useBlockState, useBlockDispatch } from "BlockState"

function ImagesSizingHeight({ height, toggle }) {
  const { TextControl } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "imagesSizingHeight", value: parseInt(newVal) },
    })
  }

  return (
    <TextControl
      type="Number"
      label={blockState.t.a.height}
      value={height}
      onChange={onChange}
      disabled={toggle === false}
    />
  )
}

export default wp.element.memo(ImagesSizingHeight)
