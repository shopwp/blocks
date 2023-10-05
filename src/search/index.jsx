import register from "../register"

function registerBlockSearch() {
  wp.blocks.registerBlockType(
    "shopwp/search",
    register({
      title: shopwp.t.l.search,
      description: shopwp.t.a.blockSearchDesc,
      defaultSettings: shopwp.search,
      blockType: "search",
      category: "shopwp-search",
      supports: {
        reusable: false,
      },
      preview:
        shopwp.misc.pluginsDirURL + "admin/imgs/blocks/preview/search.jpg",
    })
  )
}

export default registerBlockSearch
