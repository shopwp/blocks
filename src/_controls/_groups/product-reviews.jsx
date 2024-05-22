import { Toggle, TextControl, PostSelect } from "@shopwp/wp-ui"

function ProductReviewsControls({
  settings,
  dispatch,
  translations,
  layoutType,
}) {
  return (
    <>
      {layoutType !== "template-pdp" && layoutType !== "template-cdp" ? (
        <>
          <PostSelect
            name="productId"
            label="Select a product"
            options={shopwp.misc.availableProducts}
            settings={settings}
            dispatch={dispatch}
            useProductId={true}
          />
          {/* <TextControl
            label="Product ID"
            placeholder="Enter a product ID"
            name="productId"
            fallback={shopwp.misc.availableProducts[0].productId}
            type="Number"
            translations={translations}
            settings={settings}
            dispatch={dispatch}
          /> */}
        </>
      ) : null}

      <Toggle
        name="showRating"
        label="Show rating?"
        settings={settings}
        dispatch={dispatch}
      />

      <Toggle
        name="showListing"
        label="Show listing?"
        settings={settings}
        dispatch={dispatch}
      />

      <Toggle
        name="showCreateNew"
        label="Show create new form?"
        settings={settings}
        dispatch={dispatch}
      />
    </>
  )
}

export default ProductReviewsControls
