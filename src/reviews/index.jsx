import register from "../register"

function findDefaultProductId() {
  if (shopwp.misc.layoutData) {
    if (shopwp.misc.layoutData.layoutPreviewProductId) {
      return shopwp.misc.layoutData.layoutPreviewProductId
    }
  }

  if (shopwp.misc.availableProducts.length) {
    return shopwp.misc.availableProducts[0].productId
  }

  return false
}

function registerBlockReviews() {
  wp.blocks.registerBlockType(
    "shopwp/reviews",
    register({
      title: shopwp.t.l.reviews,
      description: shopwp.t.a.blockReviewsDesc,
      defaultSettings: {
        productId: findDefaultProductId(),
        showReviews: true,
        showRating: true,
        showListing: false,
      },
      supports: {
        multiple: shopwp.misc.postType === "shopwp_shortcodes" ? false : true,
        reusable: false,
      },
      blockType: "reviews", // important
      forceDefaultsWhenEmpty: true,
      preview:
        shopwp.misc.pluginsDirURL +
        "admin/imgs/blocks/preview/product-reviews.jpg",
    })
  )
}

export default registerBlockReviews
