const ProductsLinkTarget = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlProductsLinkTarget-admin' */ "../products-link-target"
  )
)

const ProductsLinkTo = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlProductsLinkTo-admin' */ "../products-link-to"
  )
)

const ProductsLinkWithBuyButton = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlProductsLinkWithBuyButton-admin' */ "../products-link-with-buy-button"
  )
)

function GeneralControls({ settings }) {
  const { Suspense } = wp.element
  const { Spinner } = wp.components

  return (
    <Suspense fallback={<Spinner />}>
      <ProductsLinkTo linkTo={settings.linkTo} />
      <ProductsLinkTarget linkTarget={settings.linkTarget} />
      <ProductsLinkWithBuyButton
        linkWithBuyButton={settings.linkWithBuyButton}
      />
    </Suspense>
  )
}

export default wp.element.memo(GeneralControls)
