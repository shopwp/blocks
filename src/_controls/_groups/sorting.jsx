import SortBy from "../../_controls/sort-by"
import Reverse from "../../_controls/reverse"

function SortingControls({ settings }) {
  return (
    <>
      <SortBy
        collection={settings.collection}
        sortBy={settings.sortBy}
        isLoading={settings.isLoading}
      />
      <Reverse reverse={settings.reverse} isLoading={settings.isLoading} />
    </>
  )
}

export default wp.element.memo(SortingControls)
