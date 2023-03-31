import { useBlockState, useBlockDispatch } from "BlockState"

function CreatedAt() {
  const { useState } = wp.element
  const { TextControl } = wp.components

  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  const [val, setVal] = useState(blockState.settings.createdAt)

  function onChange(newVal) {
    setVal(newVal)
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "createdAt", value: newVal },
    })
  }

  return (
    <TextControl
      value={val}
      label={blockState.t.a.createdAt}
      help={blockState.t.a.createdAtHelp}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(CreatedAt)
