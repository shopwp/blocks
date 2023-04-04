import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function ThumbnailsImagesSizingScale({ scale, toggle }) {
  const { SelectControl } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  const options = [
    {
      label: blockState.t.a.none,
      value: 1,
    },
    {
      label: blockState.t.a["2"],
      value: 2,
    },
    {
      label: blockState.t.a["3"],
      value: 3,
    },
  ]

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "thumbnailImagesSizingScale", value: parseInt(newVal) },
    })
  }

  return (
    <SelectControl
      label={blockState.t.a.imageScale}
      help={blockState.t.a.imageScaleHelp}
      value={scale}
      options={options}
      onChange={onChange}
      disabled={toggle === false}
    />
  )
}

export default wp.element.memo(ThumbnailsImagesSizingScale)
