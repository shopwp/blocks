import register from "../register"
import Controls from "./controls"

function registerBlockPricing() {
  wp.blocks.registerBlockType(
    "shopwp/pricing",
    register(
      {
        title: shopwp.t.l.pricing,
        description: shopwp.t.a.blockPricingDesc,
        supports: {
          multiple: shopwp.misc.postType === "shopwp_shortcodes" ? false : true,
          reusable: false,
        },
        preview:
          shopwp.misc.pluginsDirURL +
          "admin/imgs/blocks/preview/product-pricing.jpg",
      },
      Controls
    )
  )
}

export default registerBlockPricing
