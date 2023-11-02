import register from "../register"

function registerBlockCollectionDescription() {
  wp.blocks.registerBlockType(
    "shopwp/collection-description",
    register({
      title: "Collection Description",
      description:
        "This block allows you to add a single collection description by itself",
      category: "shopwp-collections",
      blockType: "collections",
      defaultSettings: {
        excludes: ["image", "title", "products"],
      },
      singleCollectionComponent: true,
      supports: {
        multiple: shopwp.misc.postType === "shopwp_shortcodes" ? false : true,
        reusable: false,
      },
      preview:
        shopwp.misc.pluginsDirURL +
        "admin/imgs/blocks/preview/collection-description.jpg",
    })
  )
}

export default registerBlockCollectionDescription
