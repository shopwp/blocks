import { useBlockState, useBlockDispatch } from "BlockState"

function InfiniteScroll({ infiniteScroll }) {
  const { ToggleControl } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "infiniteScroll", value: newVal },
    })
  }

  return (
    <ToggleControl
      label={blockState.t.a.infiniteScroll}
      checked={infiniteScroll}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(InfiniteScroll)
