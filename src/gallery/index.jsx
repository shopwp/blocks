import register from "../register"

function registerBlockGallery() {
  wp.blocks.registerBlockType(
    "shopwp/images",
    register({
      title: shopwp.t.l.images,
      description: shopwp.t.a.blockImagesDesc,
      supports: {
        multiple: shopwp.misc.postType === "shopwp_shortcodes" ? false : true,
        reusable: false,
      },
      preview:
        shopwp.misc.pluginsDirURL +
        "admin/imgs/blocks/preview/product-images.jpg",
    })
  )
}

export default registerBlockGallery
