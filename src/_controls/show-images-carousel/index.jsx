import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function ShowImagesCarousel({ showImagesCarousel }) {
  const { ToggleControl } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "showImagesCarousel", value: newVal },
    })
  }

  return (
    <ToggleControl
      label={blockState.t.a.showImgCarousel}
      checked={showImagesCarousel}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(ShowImagesCarousel)
