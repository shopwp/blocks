import FontSizePickerControl from "../_common/font-size-picker-control"

function DescriptionSize({ fontSize }) {
  return (
    <FontSizePickerControl
      defaultValue={16}
      fontSize={fontSize}
      settingName="descriptionSize"
    />
  )
}

export default wp.element.memo(DescriptionSize)
