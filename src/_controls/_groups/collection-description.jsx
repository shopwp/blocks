import { Color, FontSize } from "@shopwp/wp-ui"

function CollectionDescriptionControls({ settings, dispatch, translations }) {
  return (
    <>
      <FontSize
        name="collectionsDescriptionTypeFontSize"
        label={translations.a.collectionsDescriptionTypeFontSize}
        translations={translations}
        settings={settings}
        dispatch={dispatch}
      />

      <Color
        name="collectionsDescriptionColor"
        label={translations.a.collectionsDescriptionColor}
        settings={settings}
        dispatch={dispatch}
      />
    </>
  )
}

export default CollectionDescriptionControls
