import { Toggle, Select } from "@shopwp/wp-ui"

function ProductSortingControls({
  settings,
  dispatch,
  translations,
  isFromCollection,
}) {
  var sortingOptions = [
    { label: translations.l.title, value: "title" },
    { label: translations.l.vendor, value: "vendor" },
    { label: "ID", value: "id" },
    { label: translations.l.price, value: "price" },
    {
      label: translations.l.bestSelling,
      value: "best_selling",
    },
    {
      label: translations.l.productType,
      value: "product_type",
    },
    {
      label: translations.a.createdAt,
      value: "created_at",
    },
    {
      label: translations.a.updatedAt,
      value: "updated_at",
    },
  ]

  if (isFromCollection) {
    sortingOptions.push({
      label: translations.l.collectionDefault,
      value: "collection_default",
    })
  }

  return (
    <>
      <Select
        name="sortBy"
        label={translations.l.sort}
        help={translations.a.sortHelp}
        options={sortingOptions}
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

export default ProductSortingControls
