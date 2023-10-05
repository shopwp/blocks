import register from "../register"

function registerBlockStorefront() {
  wp.blocks.registerBlockType(
    "shopwp/storefront",
    register({
      title: shopwp.t.a.storefront,
      description: shopwp.t.a.blockStorefrontDesc,
      defaultSettings: shopwp.storefront,
      supports: {
        reusable: false,
      },
      blockType: "storefront",
      preview:
        shopwp.misc.pluginsDirURL + "admin/imgs/blocks/preview/storefront.jpg",
    })
  )
}

export default registerBlockStorefront
