import { Toggle, Range, TextControl } from "@shopwp/wp-ui"

function CollectionPaginationControls({ settings, dispatch, translations }) {
  return (
    <>
      <Toggle
        name="collectionsPagination"
        label={translations.a.showPagination}
        settings={settings}
        dispatch={dispatch}
      />

      <Range
        name="pageSize"
        label={translations.a.pageSize}
        translations={translations}
        settings={settings}
        dispatch={dispatch}
        min={1}
        max={250}
        allowReset={false}
      />

      <TextControl
        name="limit"
        label={translations.a.limitProds}
        help={translations.a.limitProdsHelp}
        type="Number"
        settings={settings}
        dispatch={dispatch}
      />

      <Toggle
        name="infiniteScroll"
        label={translations.a.infiniteScroll}
        settings={settings}
        dispatch={dispatch}
      />
    </>
  )
}

export default CollectionPaginationControls
