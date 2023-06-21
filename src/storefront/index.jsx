import register from "../register"
import ProductsControls from "../products/controls"

function registerBlockStorefront() {
  wp.blocks.registerBlockType(
    "shopwp/storefront",
    register(
      {
        title: shopwp.t.a.storefront,
        description: shopwp.t.a.blockStorefrontDesc,
        defaultSettings: shopwp.storefront,
        supports: {
          reusable: false,
        },
        blockType: "storefront",
        preview:
          shopwp.misc.pluginsDirURL +
          "admin/imgs/blocks/preview/storefront.jpg",
      },
      ProductsControls
    )
  )
}

export default registerBlockStorefront
