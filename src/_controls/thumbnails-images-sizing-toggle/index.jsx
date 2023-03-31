import { useBlockState, useBlockDispatch } from "BlockState"

function ThumbnailsImagesSizingToggle({ toggle }) {
  const { ToggleControl } = wp.components
  const { useState } = wp.element

  const [val, setVal] = useState(toggle)
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "thumbnailImagesSizingToggle", value: newVal },
    })
    setVal(newVal)
  }

  return (
    <ToggleControl
      label={blockState.t.a.enableThumbSizing}
      checked={val}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(ThumbnailsImagesSizingToggle)
