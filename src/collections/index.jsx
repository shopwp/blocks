import register from "../register"
import CollectionsControls from "./controls"

function registerBlockCollections() {
  wp.blocks.registerBlockType(
    "shopwp/collections",
    register(
      {
        title: shopwp.t.l.collections,
        description: shopwp.t.a.blockCollectionsDesc,
        blockType: "collections",
        category: "shopwp-collections",
        defaultSettings: shopwp.collections,
        supports: {
          reusable: false,
        },
        preview:
          shopwp.misc.pluginsDirURL +
          "admin/imgs/blocks/preview/collections.jpg",
      },
      CollectionsControls
    )
  )
}

export default registerBlockCollections
