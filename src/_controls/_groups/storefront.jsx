import { Checkbox, Radio, TextControl } from "@shopwp/wp-ui"

function StorefrontControls({ settings, dispatch, translations }) {
  return (
    <>
      <Checkbox
        differentSettings={true}
        label="Include in layout"
        options={[
          { label: translations.l.tags, value: "showTags" },
          { label: translations.l.vendors, value: "showVendors" },
          { label: translations.l.types, value: "showTypes" },
          { label: translations.l.pricing, value: "showPrice" },
          { label: translations.l.collections, value: "showCollections" },
          { label: translations.a.selections, value: "showSelections" },
          {
            label: translations.a.showOptionsHeading,
            value: "showOptionsHeading",
          },
        ]}
        settings={settings}
        dispatch={dispatch}
      />
      <Radio
        name="filterOptionOpenOnLoad"
        label={translations.a.filterOptionOnLoad}
        help={translations.a.filterOptionOnLoadHelp}
        settings={settings}
        dispatch={dispatch}
        options={[
          { label: translations.l.tags, value: "tags" },
          { label: translations.l.vendors, value: "vendors" },
          { label: translations.l.types, value: "types" },
          { label: translations.l.collections, value: "collections" },
          { label: translations.l.pricing, value: "price" },
        ]}
      />
      <TextControl
        name="filterByLabelText"
        label={translations.a.showOptionsHeading}
        placeholder="Enter custom text for the 'Filter by' heading"
        settings={settings}
        dispatch={dispatch}
      />
      <TextControl
        name="sortByLabelText"
        label={translations.l.sort}
        placeholder="Enter custom text for the 'Sort by' dropdown label text"
        settings={settings}
        dispatch={dispatch}
      />
      <TextControl
        name="pageSizeLabelText"
        label={translations.a.pageSizeLabelText}
        placeholder="Enter custom text for the 'Page size' dropdown label text"
        settings={settings}
        dispatch={dispatch}
      />

      <TextControl
        name="clearFilterSelectionsText"
        label={translations.l.clearSelections}
        placeholder="Enter custom text for the 'Clear selections' text"
        settings={settings}
        dispatch={dispatch}
      />

      <TextControl
        name="collectionsHeading"
        label={translations.l.collections}
        placeholder="Enter custom text for the 'Collections' filter group label"
        settings={settings}
        dispatch={dispatch}
      />

      <TextControl
        name="tagsHeading"
        label={translations.l.tags}
        placeholder="Enter custom text for the 'Tags' filter group label"
        settings={settings}
        dispatch={dispatch}
      />

      <TextControl
        name="typesHeading"
        label={translations.l.types}
        placeholder="Enter custom text for the 'Types' filter group label"
        settings={settings}
        dispatch={dispatch}
      />

      <TextControl
        name="vendorsHeading"
        label={translations.l.vendors}
        placeholder="Enter custom text for the 'Vendors' filter group label"
        settings={settings}
        dispatch={dispatch}
      />

      <TextControl
        name="priceHeading"
        label={translations.l.price}
        placeholder="Enter custom text for the 'Price' filter group label"
        settings={settings}
        dispatch={dispatch}
      />
    </>
  )
}

export default StorefrontControls
