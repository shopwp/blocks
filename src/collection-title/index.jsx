import register from "../register"

function registerBlockCollectionTitle() {
  wp.blocks.registerBlockType(
    "shopwp/collection-title",
    register({
      title: "Collection Title",
      description:
        "This block allows you to add a single collection title by itself",
      category: "shopwp-collections",
      blockType: "collections",
      defaultSettings: {
        collectionsExcludes: ["image", "description", "products"],
      },
      singleCollectionComponent: true,
      supports: {
        multiple: shopwp.misc.postType === "shopwp_shortcodes" ? false : true,
        reusable: false,
      },
      preview:
        shopwp.misc.pluginsDirURL +
        "admin/imgs/blocks/preview/collection-title.jpg",
    })
  )
}

export default registerBlockCollectionTitle
