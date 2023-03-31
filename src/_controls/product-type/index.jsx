import FilterTextControl from "../_common/filter-text-control"

function ProductType({ state, isLoading, collection, translations }) {
  return (
    <FilterTextControl
      label={translations.a.filterByProdType}
      help={translations.a.filterByProdTypeHelp}
      settingName="productType"
      state={state}
      isLoading={isLoading}
      collection={collection}
    />
  )
}

export default wp.element.memo(ProductType)
