import register from "../register"
import Controls from "./controls"

function registerBlockCollectionTitle() {
  wp.blocks.registerBlockType(
    "shopwp/collection-title",
    register(
      {
        title: "Collection Title",
        description:
          "This block allows you to add a single collection title by itself",
        category: "shopwp-collections",
        blockType: "collections",
        defaultSettings: shopwp.collections,
        supports: {
          multiple: shopwp.misc.postType === "shopwp_shortcodes" ? false : true,
          reusable: false,
        },
        preview:
          shopwp.misc.pluginsDirURL +
          "admin/imgs/blocks/preview/collection-title.jpg",
      },
      Controls
    )
  )
}

export default registerBlockCollectionTitle
