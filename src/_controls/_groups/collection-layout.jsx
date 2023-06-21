import { Range, Checkbox } from "@shopwp/wp-ui"

function CollectionLayoutControls({ settings, dispatch, translations }) {
  return (
    <>
      <Range
        name="collectionsItemsPerRow"
        label={translations.a.itemsPerRow}
        translations={translations}
        settings={settings}
        dispatch={dispatch}
        min={1}
        max={20}
        fallback={shopwp.collections.itemsPerRow}
      />
      <Checkbox
        name="collectionsExcludes"
        label={translations.a.excludeLayoutCollection}
        options={[
          { label: translations.a.image, value: "image" },
          { label: translations.l.title, value: "title" },
          { label: translations.l.description, value: "description" },
          { label: translations.l.products, value: "products" },
        ]}
        settings={settings}
        dispatch={dispatch}
      />
      <Range
        name="collectionsGridColumnGap"
        label={translations.a.spaceBetween}
        translations={translations}
        settings={settings}
        dispatch={dispatch}
        min={1}
        max={100}
        fallback={shopwp.collections.gridColumnGap}
        isPx={true}
      />
    </>
  )
}

export default CollectionLayoutControls
