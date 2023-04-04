import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function Limit({ limit }) {
  const { TextControl } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onLimitChange(newVal) {
    if (!newVal) {
      blockDispatch({
        type: "UPDATE_SETTING",
        payload: { key: "limit", value: false },
      })
    } else {
      var newLimitNum = parseInt(newVal)
      blockDispatch({
        type: "UPDATE_SETTING",
        payload: { key: "limit", value: newLimitNum },
      })
    }
  }

  return (
    <TextControl
      label={blockState.t.a.limitProds}
      help={blockState.t.a.limitProdsHelp}
      value={limit}
      onChange={onLimitChange}
      type="number"
    />
  )
}

export default wp.element.memo(Limit)
