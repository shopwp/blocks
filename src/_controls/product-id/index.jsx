function ProductId({ state, dispatch }) {
  const { useState } = wp.element
  const { TextControl } = wp.components
  const [val, setVal] = useState(state.settings.productId)

  function onChange(newVal) {
    setVal(newVal)
    dispatch({
      type: "UPDATE_SETTING",
      payload: { key: "productId", value: newVal },
    })
  }

  return (
    <TextControl
      label={state.t.a.productID}
      help={state.t.a.productIDHelp}
      value={val}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(ProductId)
