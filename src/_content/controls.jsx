import TitleControls from "../title/controls"
import ProductsControls from "../products/controls"
import PricingControls from "../pricing/controls"
import GalleryControls from "../gallery/controls"
import DescriptionControls from "../description/controls"
import CollectionsControls from "../collections/controls"
import CollectionTitleControls from "../collection-title/controls"
import CollectionImageControls from "../collection-image/controls"
import CollectionDescriptionControls from "../collection-description/controls"
import CartIconControls from "../cart-icon/controls"
import BuyButtonControls from "../buy-button/controls"
import ReviewsControls from "../reviews/controls"
import ControlsWrapper from "../_controls/wrapper"

function Controls({ name }) {
  return (
    <ControlsWrapper>
      {name === "shopwp/images" ? (
        <GalleryControls />
      ) : name === "shopwp/products" ? (
        <ProductsControls />
      ) : name === "shopwp/storefront" ? (
        <ProductsControls />
      ) : name === "shopwp/search" ? (
        <ProductsControls />
      ) : name === "shopwp/title" ? (
        <TitleControls />
      ) : name === "shopwp/pricing" ? (
        <PricingControls />
      ) : name === "shopwp/description" ? (
        <DescriptionControls />
      ) : name === "shopwp/buy-button" ? (
        <BuyButtonControls />
      ) : name === "shopwp/collections" ? (
        <CollectionsControls />
      ) : name === "shopwp/collection-title" ? (
        <CollectionTitleControls />
      ) : name === "shopwp/collection-image" ? (
        <CollectionImageControls />
      ) : name === "shopwp/collection-description" ? (
        <CollectionDescriptionControls />
      ) : name === "shopwp/cart-icon" ? (
        <CartIconControls />
      ) : name === "shopwp/reviews" ? (
        <ReviewsControls />
      ) : null}
    </ControlsWrapper>
  )
}

export default Controls
