import {
  Toggle,
  TextControl,
  Select,
  cropOptions,
  scaleOptions,
} from "@shopwp/wp-ui"

function CollectionImagesControls({ settings, dispatch, translations }) {
  return (
    <>
      <Toggle
        name="collectionsImagesSizingToggle"
        label={translations.a.enableFeatImgSizing}
        settings={settings}
        dispatch={dispatch}
      />

      <TextControl
        name="collectionsImagesSizingWidth"
        label={translations.a.width}
        type="Number"
        disabled={settings.collectionsImagesSizingToggle === false}
        settings={settings}
        dispatch={dispatch}
      />

      <TextControl
        name="collectionsImagesSizingHeight"
        label={translations.a.height}
        type="Number"
        disabled={settings.collectionsImagesSizingToggle === false}
        settings={settings}
        dispatch={dispatch}
      />

      <Select
        name="collectionsImagesSizingCrop"
        label={translations.a.imageCropPos}
        help={translations.a.imageCropPosHelp}
        options={cropOptions(translations)}
        settings={settings}
        dispatch={dispatch}
        disabled={settings.collectionsImagesSizingToggle === false}
      />

      <Select
        name="collectionsImagesSizingScale"
        label={translations.a.imageCropPos}
        help={translations.a.imageCropPosHelp}
        options={scaleOptions(translations)}
        settings={settings}
        dispatch={dispatch}
        disabled={settings.collectionsImagesSizingToggle === false}
        isInt={true}
      />
    </>
  )
}

export default CollectionImagesControls
