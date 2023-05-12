import register from "../register"
import SingleProductControls from "./controls"

function registerBlockSingleProduct() {
  wp.blocks.registerBlockType(
    "shopwp/single-product",
    register(
      shopwp.t.l.product,
      shopwp.t.a.blockProductDesc,
      SingleProductControls
    )
  )
}

export default registerBlockSingleProduct
