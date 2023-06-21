import { Color, FontSize, Range } from "@shopwp/wp-ui"

function ProductDescriptionControls({ settings, dispatch, translations }) {
  return (
    <>
      <FontSize
        name="descriptionTypeFontSize"
        label={translations.a.productDescriptionTypeFontSize}
        translations={translations}
        settings={settings}
        dispatch={dispatch}
      />
      <Color
        name="descriptionColor"
        label={translations.a.productDescriptionColor}
        settings={settings}
        dispatch={dispatch}
      />

      <Range
        name="descriptionTypeLineHeight"
        label={translations.a.productDescriptionTypeLineHeight}
        translations={translations}
        settings={settings}
        dispatch={dispatch}
        min={1}
        step={0.1}
        max={5}
        isFloat={true}
        fallback={shopwp.products.descriptionTypeLineHeight}
      />
      <Range
        name="descriptionLength"
        label={translations.a.limitDesc}
        help={translations.a.limitDescHelp}
        translations={translations}
        settings={settings}
        dispatch={dispatch}
        min={1}
        step={2}
        max={1000}
        fallback={shopwp.products.descriptionLength}
      />
    </>
  )
}

export default ProductDescriptionControls
