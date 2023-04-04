import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function ThumbnailsImagesSizingHeight({ height, toggle }) {
  const { TextControl } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "thumbnailImagesSizingHeight", value: parseInt(newVal) },
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

export default wp.element.memo(ThumbnailsImagesSizingHeight)
