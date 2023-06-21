import {
  Toggle,
  TextControl,
  Select,
  cropOptions,
  scaleOptions,
  Range,
} from "@shopwp/wp-ui"

function ProductImagesControls({ settings, dispatch, translations }) {
  return (
    <>
      <Toggle
        name="showFeaturedOnly"
        label={translations.a.showFeatOnly}
        settings={settings}
        dispatch={dispatch}
      />

      <Toggle
        name="showZoom"
        label={translations.a.showZoom}
        help={translations.a.showZoomHelp}
        settings={settings}
        dispatch={dispatch}
      />
      <Toggle
        name="showImagesCarousel"
        label={translations.a.showImgCarousel}
        settings={settings}
        dispatch={dispatch}
      />
      {settings.showImagesCarousel ? (
        <>
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
      ) : null}

      <Toggle
        name="imagesShowNextOnHover"
        label={translations.a.showNextImgHover}
        settings={settings}
        dispatch={dispatch}
      />
      <Toggle
        name="showSaleNotice"
        label={translations.a.showSaleNotice}
        settings={settings}
        dispatch={dispatch}
      />
      <Toggle
        name="showOutOfStockNotice"
        label={translations.a.showOutOfStockNotice}
        settings={settings}
        dispatch={dispatch}
      />

      <Toggle
        name="imagesSizingToggle"
        label={translations.a.enableFeatImgSizing}
        settings={settings}
        dispatch={dispatch}
      />

      <TextControl
        name="imagesSizingWidth"
        label={translations.a.width}
        type="Number"
        disabled={settings.imagesSizingToggle === false}
        settings={settings}
        dispatch={dispatch}
      />

      <TextControl
        name="imagesSizingHeight"
        label={translations.a.height}
        type="Number"
        disabled={settings.imagesSizingToggle === false}
        settings={settings}
        dispatch={dispatch}
      />

      <Select
        name="imagesSizingCrop"
        label={translations.a.imageCropPos}
        help={translations.a.imageCropPosHelp}
        options={cropOptions(translations)}
        settings={settings}
        dispatch={dispatch}
        disabled={settings.imagesSizingToggle === false}
      />

      <Select
        name="imagesSizingScale"
        label={translations.a.imageCropPos}
        help={translations.a.imageCropPosHelp}
        options={scaleOptions(translations)}
        settings={settings}
        dispatch={dispatch}
        disabled={settings.imagesSizingToggle === false}
        isInt={true}
      />

      <Toggle
        name="thumbnailImagesSizingToggle"
        label={translations.a.enableThumbSizing}
        settings={settings}
        dispatch={dispatch}
      />

      <TextControl
        name="thumbnailImagesSizingWidth"
        label={translations.a.width}
        type="Number"
        disabled={settings.thumbnailImagesSizingToggle === false}
        settings={settings}
        dispatch={dispatch}
      />

      <TextControl
        name="thumbnailImagesSizingHeight"
        label={translations.a.height}
        type="Number"
        disabled={settings.thumbnailImagesSizingToggle === false}
        settings={settings}
        dispatch={dispatch}
      />

      <Select
        name="thumbnailImagesSizingCrop"
        label={translations.a.imageCropPos}
        help={translations.a.imageCropPosHelp}
        options={cropOptions(translations)}
        settings={settings}
        dispatch={dispatch}
        disabled={settings.thumbnailImagesSizingToggle === false}
      />

      <Select
        name="thumbnailImagesSizingScale"
        label={translations.a.imageScale}
        help={translations.a.imageScaleHelp}
        options={cropOptions(translations)}
        settings={settings}
        dispatch={dispatch}
        disabled={settings.thumbnailImagesSizingToggle === false}
        isInt={true}
      />
    </>
  )
}

export default ProductImagesControls
