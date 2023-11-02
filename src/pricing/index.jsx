import register from "../register"

function registerBlockPricing() {
  wp.blocks.registerBlockType(
    "shopwp/pricing",
    register({
      title: shopwp.t.l.pricing,
      description: shopwp.t.a.blockPricingDesc,
      defaultSettings: {
        excludes: ["buy-button", "description", "title", "images"],
      },
      singleProductComponent: true,
      supports: {
        multiple: shopwp.misc.postType === "shopwp_shortcodes" ? false : true,
        reusable: false,
      },
      preview:
        shopwp.misc.pluginsDirURL +
        "admin/imgs/blocks/preview/product-pricing.jpg",
    })
  )
}

export default registerBlockPricing
