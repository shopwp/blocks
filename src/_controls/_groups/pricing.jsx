const ShowPriceRange = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlShowPriceRange-admin' */ "../show-price-range"
  )
)

const ShowCompareAt = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlShowCompareAt-admin' */ "../show-compare-at"
  )
)

const ShowPriceUnderVariantButton = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlShowPriceUnderVariantButton-admin' */ "../show-price-under-variant-button"
  )
)

function PricingControls({ settings }) {
  const { Suspense } = wp.element
  const { Spinner } = wp.components

  return (
    <Suspense fallback={<Spinner />}>
      <ShowPriceRange showPriceRange={settings.showPriceRange} />
      <ShowCompareAt showCompareAt={settings.showCompareAt} />
      {settings.variantStyle === "buttons" && (
        <ShowPriceUnderVariantButton
          showPriceUnderVariantButton={settings.showPriceUnderVariantButton}
        />
      )}
    </Suspense>
  )
}

export default wp.element.memo(PricingControls)
