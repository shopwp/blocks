import { Products } from "@shopwp/components"
import BlockContent from "../../_content"

function ProductsContent() {
  return (
    <BlockContent>
      <Products skeletonType="products" />
    </BlockContent>
  )
}

export default ProductsContent
