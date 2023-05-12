import register from "../register"
import BuyButtonControls from "./controls"

function registerBlockBuyButton() {
  wp.blocks.registerBlockType(
    "shopwp/buy-button",
    register(
      shopwp.t.l.buyButton,
      shopwp.t.a.blockBuyButtonDesc,
      BuyButtonControls
    )
  )
}

export default registerBlockBuyButton
