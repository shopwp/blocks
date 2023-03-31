import { useBlockState, useBlockDispatch } from "BlockState"

function ShowFeaturedOnly({ showFeaturedOnly }) {
  const { ToggleControl } = wp.components

  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "showFeaturedOnly", value: newVal },
    })
  }

  return (
    <ToggleControl
      label={blockState.t.a.showFeatOnly}
      checked={showFeaturedOnly}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(ShowFeaturedOnly)
