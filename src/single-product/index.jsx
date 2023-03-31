import BlockRoot from "../_content/root"
import BlockWrapper from "../_content/wrapper"
import SingleProductControls from "./controls"
import Icon from "../_icons"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

function BlockSingleProduct() {
  return {
    title: shopwp.t.l.product,
    description: shopwp.t.a.blockProductDesc,
    category: "shopwp-products",
    keywords: ["products", "shopify", "store", "ecommerce", "sell"],
    icon: Icon,
    attributes: {
      settingsId: {
        type: "string",
        default: "",
      },
      defaultSettings: {
        type: "object",
        default: shopwp.products,
      },
      clientId: {
        type: "string",
        default: "",
      },
    },
    edit: (props) => {
      return (
        <QueryClientProvider client={queryClient}>
          <BlockWrapper blockProps={props}>
            <SingleProductControls />
          </BlockWrapper>
        </QueryClientProvider>
      )
    },
    save: (props) => {
      return <BlockRoot attributes={props.attributes} />
    },
  }
}

function registerBlockSingleProduct() {
  wp.blocks.registerBlockType("shopwp/single-product", BlockSingleProduct())
}

export default registerBlockSingleProduct
