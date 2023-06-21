import { Toggle } from "@shopwp/wp-ui"

function ProductCheckoutControls({ settings, dispatch, translations }) {
  return (
    <>
      <Toggle
        name="directCheckout"
        label={translations.a.enableDirectCheckout}
        settings={settings}
        dispatch={dispatch}
      />
    </>
  )
}

export default ProductCheckoutControls
