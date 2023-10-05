import BlockRoot from "./_content/root"
import BlockWrapper from "./_content/wrapper"
import Icon from "./_icons"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import BlockProvider from "./_state/provider"
const queryClient = new QueryClient()

function register(settings) {
  return {
    title: settings.title,
    description: settings.description,
    category: settings.category ? settings.category : "shopwp-products",
    keywords: ["products", "shopify", "store", "ecommerce", "sell"],
    supports: settings?.supports ? settings.supports : false,
    icon: Icon,
    example: {
      attributes: {
        preview: settings.preview,
      },
    },
    attributes: {
      settingsId: {
        type: "string",
        default: "",
      },
      defaultSettings: {
        type: "object",
        default: settings?.defaultSettings
          ? settings.defaultSettings
          : shopwp.products,
      },
      layoutType: {
        type: "string",
        default: shopwp.misc.layoutType,
      },
      blockType: {
        type: "string",
        default: settings?.blockType ? settings.blockType : "products",
      },
      clientId: {
        type: "string",
        default: "",
      },
      preview: {
        type: "string",
        default: "",
      },
      name: {
        type: "string",
        default: "",
      },
    },
    edit: (props) => {
      const { useEffect } = wp.element
      const { setAttributes, clientId, name } = props

      useEffect(() => {
        setAttributes({ clientId: clientId, name: name })
      }, [clientId])

      return props.attributes.preview ? (
        <img
          src={props.attributes.preview}
          style={{ width: "100%", height: "auto" }}
        />
      ) : (
        <QueryClientProvider client={queryClient}>
          <BlockProvider blockProps={props}>
            <BlockWrapper blockProps={props} />
          </BlockProvider>
        </QueryClientProvider>
      )
    },
    save: (props) => {
      return <BlockRoot blockProps={props} />
    },
  }
}

export default register
