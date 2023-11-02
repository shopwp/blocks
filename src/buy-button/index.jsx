import register from "../register"

function registerBlockBuyButton() {
  wp.blocks.registerBlockType(
    "shopwp/buy-button",
    register({
      title: shopwp.t.l.buyButton,
      description: shopwp.t.a.blockBuyButtonDesc,
      supports: {
        multiple: shopwp.misc.postType === "shopwp_shortcodes" ? false : true,
        reusable: false,
      },
      defaultSettings: {
        excludes: ["description", "title", "pricing", "images"],
      },
      singleProductComponent: true,
      preview:
        shopwp.misc.pluginsDirURL +
        "admin/imgs/blocks/preview/product-buy-button.jpg",
    })
  )
}

export default registerBlockBuyButton
