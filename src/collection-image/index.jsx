import register from "../register"

function registerBlockCollectionImage() {
  wp.blocks.registerBlockType(
    "shopwp/collection-image",
    register({
      title: "Collection Image",
      description:
        "This block allows you to add a single collection image by itself",
      category: "shopwp-collections",
      blockType: "collections",
      defaultSettings: {
        collectionsExcludes: ["title", "description", "products"],
      },
      singleCollectionComponent: true,
      supports: {
        multiple: shopwp.misc.postType === "shopwp_shortcodes" ? false : true,
        reusable: false,
      },
      preview:
        shopwp.misc.pluginsDirURL +
        "admin/imgs/blocks/preview/collection-image.jpg",
    })
  )
}

export default registerBlockCollectionImage
