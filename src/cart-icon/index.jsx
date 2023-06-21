import register from "../register"
import CartIconControls from "../cart-icon/controls"

function registerBlockCartIcon() {
  wp.blocks.registerBlockType(
    "shopwp/cart-icon",
    register(
      {
        title: shopwp.t.a.cartIcon,
        description: shopwp.t.a.blockCartDesc,
        defaultSettings: shopwp.cart,
        blockType: "cartIcon",
        supports: {
          reusable: false,
        },
        category: "shopwp-cart",
        preview:
          shopwp.misc.pluginsDirURL + "admin/imgs/blocks/preview/cart-icon.jpg",
      },
      CartIconControls
    )
  )
}

export default registerBlockCartIcon
