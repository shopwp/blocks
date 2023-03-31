import { useBlockState, useBlockDispatch } from "BlockState"

function ImagesSizingToggle({ state }) {
  const { ToggleControl } = wp.components
  const { useState } = wp.element
  const [val, setVal] = useState(state)
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "imagesSizingToggle", value: newVal },
    })
    setVal(newVal)
  }

  return (
    <ToggleControl
      label={blockState.t.a.enableFeatImgSizing}
      checked={val}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(ImagesSizingToggle)
