import register from "../register"

function registerBlockCollections() {
  wp.blocks.registerBlockType(
    "shopwp/collections",
    register({
      title: shopwp.t.l.collections,
      description: shopwp.t.a.blockCollectionsDesc,
      blockType: "collections",
      category: "shopwp-collections",
      defaultSettings: shopwp.collections,
      supports: {
        reusable: false,
      },
      preview:
        shopwp.misc.pluginsDirURL + "admin/imgs/blocks/preview/collections.jpg",
    })
  )
}

export default registerBlockCollections
