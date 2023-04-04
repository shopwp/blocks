import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function InfiniteScrollOffset({ state, dispatch }) {
  const { useEffect, useState } = wp.element
  const { TextControl } = wp.components
  const [localVal, setLocalVal] = useState(state.settings.infiniteScrollOffset)
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    setLocalVal(newVal)
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "infiniteScrollOffset", value: newVal },
    })
  }

  useEffect(() => {
    setLocalVal(state.settings.infiniteScrollOffset)
  }, [state.settings.infiniteScrollOffset])

  return (
    <TextControl
      label={blockState.t.a.infiniteScrollOffset}
      help={blockState.t.a.infiniteScrollOffsetHelp}
      value={localVal}
      onChange={onChange}
      type="number"
    />
  )
}

export default wp.element.memo(InfiniteScrollOffset)
