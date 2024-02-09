import BlockRoot from "./_content/root"
import BlockWrapper from "./_content/wrapper"
import Icon from "./_icons"
import BlockProvider from "./_state/provider"

function register(settings) {
  if (settings.singleProductComponent) {
    var defaults = {
      ...shopwp.products,
      ...settings.defaultSettings,
    }
  } else if (settings.singleCollectionComponent) {
    var defaults = {
      ...shopwp.collections,
      ...settings.defaultSettings,
    }
  } else {
    var defaults = settings.defaultSettings
  }

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
        default: defaults,
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
      return props.attributes.preview ? (
        <img
          src={props.attributes.preview}
          style={{ width: "100%", height: "auto" }}
        />
      ) : (
        <BlockProvider blockProps={props}>
          <BlockWrapper blockName={props.name} />
        </BlockProvider>
      )
    },
    save: (props) => {
      return <BlockRoot blockProps={props} />
    },
  }
}

export default register
