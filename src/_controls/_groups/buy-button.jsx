const AddToCartButtonColor = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlAddToCartButtonColor-admin' */ "../add-to-cart-button-color"
  )
)

const AddToCartButtonText = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlAddToCartButtonText-admin' */ "../add-to-cart-button-text"
  )
)

const VariantDropdownButtonColor = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlVariantDropdownButtonColor-admin' */ "../variant-dropdown-button-color"
  )
)

const HideQuantity = wp.element.lazy(() =>
  import(/* webpackChunkName: 'ControlHideQuantity-admin' */ "../hide-quantity")
)

const MinQuantity = wp.element.lazy(() =>
  import(/* webpackChunkName: 'ControlMinQuantity-admin' */ "../min-quantity")
)

const MaxQuantity = wp.element.lazy(() =>
  import(/* webpackChunkName: 'ControlMaxQuantity-admin' */ "../max-quantity")
)

const VariantStyle = wp.element.lazy(() =>
  import(/* webpackChunkName: 'ControlVariantStyle-admin' */ "../variant-style")
)

function BuyButtonControls({ settings }) {
  const { Suspense } = wp.element
  const { Spinner } = wp.components

  return (
    <Suspense fallback={<Spinner />}>
      <AddToCartButtonColor color={settings.addToCartButtonColor} />
      <AddToCartButtonText text={settings.addToCartButtonText} />
      <VariantDropdownButtonColor
        color={settings.variantDropdownButtonColor}
        style={settings.variantStyle}
      />
      <HideQuantity hide={settings.hideQuantity} />
      <MinQuantity min={settings.minQuantity} />
      <MaxQuantity max={settings.maxQuantity} />
      <VariantStyle style={settings.variantStyle} />
    </Suspense>
  )
}

export default wp.element.memo(BuyButtonControls)
