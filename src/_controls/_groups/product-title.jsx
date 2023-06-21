import { Color, FontSize } from "@shopwp/wp-ui"

function ProductTitleControls({ settings, dispatch, translations }) {
  return (
    <>
      <FontSize
        label="Product title font size"
        name="titleTypeFontSize"
        translations={translations}
        settings={settings}
        dispatch={dispatch}
      />

      <Color
        name="titleColor"
        settings={settings}
        label={translations.l.titleColor}
        dispatch={dispatch}
      />
    </>
  )
}

export default ProductTitleControls
