import { Color, FontSize, Toggle } from "@shopwp/wp-ui"

function ProductPricingControls({ settings, dispatch, translations }) {
  return (
    <>
      <Toggle
        name="showPriceRange"
        label={translations.a.showPriceRange}
        settings={settings}
        dispatch={dispatch}
      />
      <Toggle
        name="showCompareAt"
        label={translations.a.showCompareAt}
        help={translations.a.showCompareAtHelp}
        settings={settings}
        dispatch={dispatch}
      />
      {settings.variantStyle === "buttons" ? (
        <Toggle
          name="showPriceUnderVariantButton"
          label={translations.a.showPriceUnder}
          settings={settings}
          dispatch={dispatch}
        />
      ) : null}
      <FontSize
        name="pricingTypeFontSize"
        label={translations.a.priceFontSize}
        translations={translations}
        settings={settings}
        dispatch={dispatch}
      />
      <Color
        name="pricingColor"
        label={translations.a.priceColor}
        settings={settings}
        dispatch={dispatch}
      />

      {settings.showCompareAt ? (
        <>
          <FontSize
            label={shopwp.t.a.priceCompareAtFontSize}
            name="pricingCompareAtTypeFontSize"
            translations={translations}
            settings={settings}
            dispatch={dispatch}
          />
          <Color
            name="pricingCompareAtTypeFontColor"
            label={translations.a.priceCompareAtColor}
            settings={settings}
            dispatch={dispatch}
          />
          <Color
            name="pricingCompareAtTypeSaleTextColor"
            label={translations.a.priceCompareAtSaleTextColor}
            settings={settings}
            dispatch={dispatch}
          />
        </>
      ) : null}
    </>
  )
}

export default ProductPricingControls
