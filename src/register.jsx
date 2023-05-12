import BlockRoot from "./_content/root"
import BlockWrapper from "./_content/wrapper"
import Icon from "./_icons"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

function register(title, description, Controls) {
  return {
    title: title,
    description: description,
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
            <Controls />
          </BlockWrapper>
        </QueryClientProvider>
      )
    },
    save: (props) => {
      return <BlockRoot attributes={props.attributes} />
    },
  }
}

export default register
