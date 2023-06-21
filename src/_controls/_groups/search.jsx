import { Radio, TextControl } from "@shopwp/wp-ui"

function SearchControls({ settings, dispatch, translations, isLoading }) {
  return (
    <>
      <Radio
        name="searchBy"
        help={translations.a.searchByHelp}
        label={translations.a.searchBy}
        options={[
          {
            label: translations.l.title,
            value: "title",
          },
          {
            label: translations.l.tag,
            value: "tag",
          },
          {
            label: translations.l.vendor,
            value: "vendor",
          },
          {
            label: translations.l.productType,
            value: "product_type",
          },
          {
            label: translations.a.variantsTitle,
            value: "variants.title",
          },
        ]}
        settings={settings}
        dispatch={dispatch}
      />
      <TextControl
        name="searchPlaceholderText"
        label={translations.a.searchPlaceholderText}
        settings={settings}
        dispatch={dispatch}
      />
    </>
  )
}

export default SearchControls
