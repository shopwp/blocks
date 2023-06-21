import register from "../register"
import Controls from "./controls"

function registerBlockTitle() {
  wp.blocks.registerBlockType(
    "shopwp/title",
    register(
      {
        title: shopwp.t.l.title,
        description: shopwp.t.a.blockTitleDesc,
        supports: {
          multiple: shopwp.misc.postType === "shopwp_shortcodes" ? false : true,
          reusable: false,
        },
        preview:
          shopwp.misc.pluginsDirURL +
          "admin/imgs/blocks/preview/product-title.jpg",
      },
      Controls
    )
  )
}

export default registerBlockTitle
