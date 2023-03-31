import FilterTextControl from "../_common/filter-text-control"
import { useBlockState } from "BlockState"

function Title({ title, isLoading, collection }) {
  const blockState = useBlockState()

  return (
    <FilterTextControl
      label={blockState.t.a.filterByTitle}
      help={blockState.t.a.filterByTitleHelp}
      settingName="title"
      state={title}
      isLoading={isLoading}
      collection={collection}
    />
  )
}

export default wp.element.memo(Title)
