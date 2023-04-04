import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function ThumbnailsImagesSizingWidth({ width, toggle }) {
  const { TextControl } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "thumbnailImagesSizingWidth", value: parseInt(newVal) },
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

export default wp.element.memo(ThumbnailsImagesSizingWidth)
