import ProductsLinkTarget from "../products-link-target"
import ProductsLinkTo from "../products-link-to"
import ProductsLinkWithBuyButton from "../products-link-with-buy-button"

function GeneralControls({ settings }) {
  return (
    <>
      <ProductsLinkTo linkTo={settings.linkTo} />
      <ProductsLinkTarget linkTarget={settings.linkTarget} />
      <ProductsLinkWithBuyButton
        linkWithBuyButton={settings.linkWithBuyButton}
      />
    </>
  )
}

export default wp.element.memo(GeneralControls)
