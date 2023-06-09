import register from "../register"
import Controls from "./controls"

function registerBlockCollectionImage() {
  wp.blocks.registerBlockType(
    "shopwp/collection-image",
    register(
      {
        title: "Collection Image",
        description:
          "This block allows you to add a single collection image by itself",
        category: "shopwp-collections",
        blockType: "collections",
        defaultSettings: shopwp.collections,
        supports: {
          multiple: shopwp.misc.postType === "shopwp_shortcodes" ? false : true,
          reusable: false,
        },
        preview:
          shopwp.misc.pluginsDirURL +
          "admin/imgs/blocks/preview/collection-image.jpg",
      },
      Controls
    )
  )
}

export default registerBlockCollectionImage
