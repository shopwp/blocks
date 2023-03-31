import DirectCheckout from "../direct-checkout"

function CheckoutControls({ settings }) {
  return (
    <>
      <DirectCheckout directCheckout={settings.directCheckout} />
    </>
  )
}

export default wp.element.memo(CheckoutControls)
