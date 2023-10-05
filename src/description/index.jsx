import register from "../register"

function registerBlockDescription() {
  wp.blocks.registerBlockType(
    "shopwp/description",
    register({
      title: shopwp.t.l.description,
      description: shopwp.t.a.blockDescriptionDesc,
      supports: {
        multiple: shopwp.misc.postType === "shopwp_shortcodes" ? false : true,
        reusable: false,
      },
      preview:
        shopwp.misc.pluginsDirURL +
        "admin/imgs/blocks/preview/product-description.jpg",
    })
  )
}

export default registerBlockDescription
