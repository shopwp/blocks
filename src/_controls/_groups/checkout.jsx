const DirectCheckout = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlDirectCheckout-admin' */ "../direct-checkout"
  )
)

function CheckoutControls({ settings }) {
  const { Suspense } = wp.element
  const { Spinner } = wp.components

  return (
    <Suspense fallback={<Spinner />}>
      <DirectCheckout directCheckout={settings.directCheckout} />
    </Suspense>
  )
}

export default wp.element.memo(CheckoutControls)
