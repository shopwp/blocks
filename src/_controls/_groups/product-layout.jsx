import { Toggle, Range, Checkbox, TextControl } from "@shopwp/wp-ui"

function ProductLayoutControls({
  settings,
  dispatch,
  translations,
  blockName,
}) {
  return (
    <>
      <Toggle
        name="withSorting"
        label={translations.l.withSorting}
        settings={settings}
        dispatch={dispatch}
      />
      <Toggle
        name="withPageSize"
        label={translations.l.withPageSize}
        settings={settings}
        dispatch={dispatch}
      />
      {blockName === "shopwp/storefront" ? (
        <Toggle
          name="withSearch"
          label={translations.l.withSearch}
          settings={settings}
          dispatch={dispatch}
        />
      ) : null}

      <Range
        name="itemsPerRow"
        label={translations.a.itemsPerRow}
        translations={translations}
        settings={settings}
        dispatch={dispatch}
        min={1}
        max={20}
        fallback={shopwp.products.itemsPerRow}
      />
      <Checkbox
        name="excludes"
        label={translations.a.excludeLayout}
        options={[
          { label: translations.l.buyButton, value: "buy-button" },
          { label: translations.l.title, value: "title" },
          { label: translations.l.pricing, value: "pricing" },
          { label: translations.l.images, value: "images" },
          { label: translations.l.description, value: "description" },
        ]}
        settings={settings}
        dispatch={dispatch}
      />
      <Range
        name="gridColumnGap"
        label={translations.a.spaceBetween}
        translations={translations}
        settings={settings}
        dispatch={dispatch}
        min={1}
        max={100}
        fallback={shopwp.products.gridColumnGap}
        isPx={true}
      />
      <Toggle
        name="fullWidth"
        label={translations.l.fullWidth}
        settings={settings}
        dispatch={dispatch}
      />
      <Toggle
        name="alignHeight"
        label={translations.a.alignHeight}
        settings={settings}
        dispatch={dispatch}
      />
      <Toggle
        name="carousel"
        label={translations.l.carousel}
        settings={settings}
        dispatch={dispatch}
      />
      <Toggle
        name="carouselDots"
        label={translations.l.showCarouselDots}
        settings={settings}
        dispatch={dispatch}
      />
      <Toggle
        name="carouselInfinite"
        label={translations.l.carouselInfinite}
        settings={settings}
        dispatch={dispatch}
      />
      <Range
        name="carouselSpeed"
        label={translations.a.carouselSpeed}
        translations={translations}
        settings={settings}
        dispatch={dispatch}
        min={100}
        step={100}
        max={4000}
        fallback={shopwp.products.carouselSpeed}
      />
      <TextControl
        name="carouselSlidesToShow"
        label={translations.a.numOfSlidesToShow}
        type="Number"
        translations={translations}
        settings={settings}
        dispatch={dispatch}
      />
      <TextControl
        name="carouselSlidesToScroll"
        label={translations.a.numOfSlides}
        type="Number"
        translations={translations}
        settings={settings}
        dispatch={dispatch}
      />
    </>
  )
}

export default ProductLayoutControls
