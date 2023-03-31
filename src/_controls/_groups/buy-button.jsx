import AddToCartButtonColor from "../add-to-cart-button-color"
import AddToCartButtonText from "../add-to-cart-button-text"
import VariantDropdownButtonColor from "../variant-dropdown-button-color"
import HideQuantity from "../hide-quantity"
import MinQuantity from "../min-quantity"
import MaxQuantity from "../max-quantity"
import VariantStyle from "../variant-style"

function BuyButtonControls({ settings }) {
  return (
    <>
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
    </>
  )
}

export default wp.element.memo(BuyButtonControls)
