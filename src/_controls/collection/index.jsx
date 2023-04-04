import FilterTextControl from "../_common/filter-text-control"
import { useBlockState } from "@shopwp/blocks"

function Collection({ state, isLoading }) {
  const blockState = useBlockState()

  return (
    <FilterTextControl
      label={blockState.t.a.filterByCollection}
      help={blockState.t.a.filterByCollectionHelp}
      settingName="collection"
      state={state}
      isLoading={isLoading}
    />
  )
}

export default wp.element.memo(Collection)
