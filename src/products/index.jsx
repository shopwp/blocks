import register from "../register"

function registerBlockProducts() {
  wp.blocks.registerBlockType(
    "shopwp/products",
    register({
      title: shopwp.t.l.products,
      description: shopwp.t.a.blockProductsDesc,
      defaultSettings: shopwp.products,
      supports: {
        reusable: false,
      },
      preview:
        shopwp.misc.pluginsDirURL + "admin/imgs/blocks/preview/products.jpg",
    })
  )
}

export default registerBlockProducts
