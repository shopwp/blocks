import register from "../register"
import BuyButtonControls from "./controls"

function registerBlockBuyButton() {
  wp.blocks.registerBlockType(
    "shopwp/buy-button",
    register(
      {
        title: shopwp.t.l.buyButton,
        description: shopwp.t.a.blockBuyButtonDesc,
        supports: {
          multiple: shopwp.misc.postType === "shopwp_shortcodes" ? false : true,
          reusable: false,
        },
        preview:
          shopwp.misc.pluginsDirURL +
          "admin/imgs/blocks/preview/product-buy-button.jpg",
      },
      BuyButtonControls
    )
  )
}

export default registerBlockBuyButton
