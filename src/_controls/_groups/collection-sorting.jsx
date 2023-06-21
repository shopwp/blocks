import { Toggle, Select } from "@shopwp/wp-ui"

function CollectionSortingControls({ settings, dispatch, translations }) {
  return (
    <>
      <Select
        name="sortBy"
        label={translations.l.sort}
        help={translations.a.sortHelp}
        options={[
          { label: translations.l.title, value: "title" },
          { label: translations.l.updatedAt, value: "updated_at" },
          { label: "ID", value: "id" },
        ]}
        settings={settings}
        dispatch={dispatch}
      />

      <Toggle
        name="reverse"
        label={translations.a.reverseOrder}
        settings={settings}
        dispatch={dispatch}
      />
    </>
  )
}

export default CollectionSortingControls
