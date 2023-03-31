import { useBlockState, useBlockDispatch } from "BlockState"

function ImagesSizingCrop({ crop, toggle }) {
  const { SelectControl } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  const options = [
    {
      label: blockState.t.a.none,
      value: "none",
    },
    {
      label: blockState.t.a.top,
      value: "top",
    },
    {
      label: blockState.t.a.center,
      value: "center",
    },
    {
      label: blockState.t.a.bottom,
      value: "bottom",
    },
    {
      label: blockState.t.a.left,
      value: "left",
    },
    {
      label: blockState.t.a.right,
      value: "right",
    },
  ]

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "imagesSizingCrop", value: newVal },
    })
  }

  return (
    <SelectControl
      label={blockState.t.a.imageCropPos}
      help={blockState.t.a.imageCropPosHelp}
      value={crop}
      options={options}
      onChange={onChange}
      disabled={toggle === false}
    />
  )
}

export default wp.element.memo(ImagesSizingCrop)
