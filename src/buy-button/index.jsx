import BlockRoot from "../_content/root"
import BlockWrapper from "../_content/wrapper"
import BuyButtonControls from "./controls"
import Icon from "../_icons"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

function BlockBuyButton() {
  return {
    title: shopwp.t.l.buyButton,
    description: shopwp.t.a.blockBuyButtonDesc,
    keywords: ["products", "shopify", "store", "button", "buy"],
    category: "shopwp-products",
    icon: Icon,
    attributes: {
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
    },
    edit: (props) => {
      return (
        <QueryClientProvider client={queryClient}>
          <BlockWrapper blockProps={props}>
            <BuyButtonControls />
          </BlockWrapper>
        </QueryClientProvider>
      )
    },
    save: (props) => {
      return <BlockRoot attributes={props.attributes} />
    },
  }
}

function registerBlockBuyButton() {
  wp.blocks.registerBlockType("shopwp/buy-button", BlockBuyButton())
}

export default registerBlockBuyButton
