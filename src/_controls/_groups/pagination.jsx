import Pagination from "../../_controls/pagination"
import PageSize from "../../_controls/page-size"
import Limit from "../../_controls/limit"
import InfiniteScroll from "../../_controls/infinite-scroll"

function PaginationControls({ settings }) {
  return (
    <>
      <Pagination pagination={settings.pagination} />
      <PageSize pageSize={settings.pageSize} isLoading={settings.isLoading} />
      <Limit limit={settings.limit} />
      <InfiniteScroll infiniteScroll={settings.infiniteScroll} />
    </>
  )
}

export default wp.element.memo(PaginationControls)
