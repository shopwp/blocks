import FilterTextControl from "../_common/filter-text-control"

function Vendor({ state, isLoading, collection, translations }) {
  return (
    <FilterTextControl
      label={translations.a.filterByVendor}
      help={translations.a.filterByVendorHelp}
      settingName="vendor"
      state={state}
      isLoading={isLoading}
      collection={collection}
    />
  )
}

export default wp.element.memo(Vendor)
