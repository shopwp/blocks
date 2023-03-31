import { useBlockState, useBlockDispatch } from "BlockState"

function ImagesShowNextOnHover({ state, showZoom }) {
  const { ToggleControl } = wp.components
  const { useState } = wp.element
  const [val, setVal] = useState(state)
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "imagesShowNextOnHover", value: newVal },
    })
    setVal(newVal)
  }

  return (
    <ToggleControl
      label={blockState.t.a.showNextImgHover}
      checked={val}
      onChange={onChange}
      disabled={showZoom}
    />
  )
}

export default wp.element.memo(ImagesShowNextOnHover)
