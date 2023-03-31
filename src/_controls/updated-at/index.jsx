function UpdatedAt({ state, dispatch }) {
  const { useState } = wp.element
  const { TextControl } = wp.components
  const [val, setVal] = useState(state.settings.updatedAt)

  function onChange(newVal) {
    setVal(newVal)
    dispatch({
      type: "UPDATE_SETTING",
      payload: { key: "updatedAt", value: newVal },
    })
  }

  return (
    <TextControl
      label={state.t.a.updatedAt}
      help={state.t.a.updatedAtHelp}
      value={val}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(UpdatedAt)
