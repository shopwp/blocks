import FontSizePickerControl from "../_common/font-size-picker-control"

function TitleSize({ fontSize }) {
  return (
    <FontSizePickerControl
      fontSize={fontSize}
      defaultValue={22}
      settingName="titleSize"
    />
  )
}

export default wp.element.memo(TitleSize)
