import { Toggle, Select } from "@shopwp/wp-ui"

function ProductSortingControls({
  settings,
  dispatch,
  translations,
  isFromCollection,
}) {
  var sortingOptionsProducts = [
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

  var sortingOptionsCollections = [
    { label: translations.l.title, value: "title" },
    {
      label: translations.l.collectionDefault,
      value: "collection_default",
    },
    {
      label: translations.l.collectionManual,
      value: "manual",
    },
    {
      label: translations.a.createdAt,
      value: "created",
    },
    {
      label: translations.l.bestSelling,
      value: "best_selling",
    },
    { label: translations.l.price, value: "price" },
  ]

  return (
    <>
      <Select
        name="sortBy"
        label={translations.l.sort}
        help={translations.a.sortHelp}
        options={
          isFromCollection ? sortingOptionsCollections : sortingOptionsProducts
        }
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
