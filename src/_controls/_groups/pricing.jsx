import ShowPriceRange from "../show-price-range"
import ShowCompareAt from "../show-compare-at"
import ShowPriceUnderVariantButton from "../show-price-under-variant-button"

function PricingControls({ settings }) {
  return (
    <>
      <ShowPriceRange showPriceRange={settings.showPriceRange} />
      <ShowCompareAt showCompareAt={settings.showCompareAt} />
      {settings.variantStyle === "buttons" && (
        <ShowPriceUnderVariantButton
          showPriceUnderVariantButton={settings.showPriceUnderVariantButton}
        />
      )}
    </>
  )
}

export default wp.element.memo(PricingControls)
