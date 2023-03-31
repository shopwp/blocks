import BlockRoot from "../_content/root"
import BlockWrapper from "../_content/wrapper"
import ProductsControls from "./controls"
import Icon from "../_icons"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

function BlockProducts() {
  return {
    title: shopwp.t.l.products,
    description: shopwp.t.a.blockProductsDesc,
    category: "shopwp-products",
    icon: Icon,
    supports: wp.hooks.applyFilters("block.productsSupports", false),
    keywords: ["products", "shopify", "store", "commerce", "shop"],
    attributes: wp.hooks.applyFilters("block.productsAttributes", {
      settingsId: {
        type: "string",
      },
      defaultSettings: {
        type: "object",
        default: shopwp.products,
      },
      clientId: {
        type: "string",
        default: "",
      },
    }),
    edit: (props) => {
      return (
        <QueryClientProvider client={queryClient}>
          <BlockWrapper blockProps={props}>
            <ProductsControls />
          </BlockWrapper>
        </QueryClientProvider>
      )
    },
    save: (props) => {
      return <BlockRoot attributes={props.attributes} />
    },
  }
}

function registerBlockProducts() {
  wp.blocks.registerBlockType("shopwp/products", BlockProducts())
}

export default registerBlockProducts
