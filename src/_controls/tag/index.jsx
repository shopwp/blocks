import FilterTextControl from "../_common/filter-text-control"

function Tag({ state, isLoading, collection, translations }) {
  return (
    <FilterTextControl
      label={translations.a.filterByTag}
      help={translations.a.filterByTagHelp}
      settingName="tag"
      state={state}
      isLoading={isLoading}
      collection={collection}
    />
  )
}

export default wp.element.memo(Tag)
