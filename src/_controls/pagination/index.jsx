import { useBlockState, useBlockDispatch } from "BlockState"

function Pagination({ pagination }) {
  const { ToggleControl } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "pagination", value: newVal },
    })
  }

  return (
    <ToggleControl
      label={blockState.t.a.showPagination}
      checked={pagination}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(Pagination)
