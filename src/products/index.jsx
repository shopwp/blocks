import register from "../register"
import ProductsControls from "./controls"

function registerBlockProducts() {
  wp.blocks.registerBlockType(
    "shopwp/products",
    register(
      shopwp.t.l.products,
      shopwp.t.a.blockProductsDesc,
      ProductsControls
    )
  )
}

export default registerBlockProducts
