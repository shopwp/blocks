import { Color, FontSize } from "@shopwp/wp-ui"

function CollectionTitleControls({ settings, dispatch, translations }) {
  return (
    <>
      <FontSize
        label="Collection title font size"
        name="collectionsTitleTypeFontSize"
        translations={translations}
        settings={settings}
        dispatch={dispatch}
      />

      <Color
        name="collectionsTitleColor"
        label={translations.l.collectionsTitleColor}
        settings={settings}
        dispatch={dispatch}
      />
    </>
  )
}

export default CollectionTitleControls
