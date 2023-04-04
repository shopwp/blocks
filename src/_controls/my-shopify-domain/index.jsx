import { useDebounce } from "use-debounce"
import { sanitizeDomainField } from "@shopwp/common"

function MyShopifyDomain({ state, dispatch }) {
  const { useEffect, useState, useRef } = wp.element
  const { TextControl } = wp.components
  const [val, setVal] = useState(getCachedValue())
  const [debouncedValue] = useDebounce(val, 50)
  const isFirstRender = useRef(true)

  function getCachedValue() {
    return shopwp.connection.storefront.domain
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    dispatch({
      type: "UPDATE_SETTING",
      payload: {
        key: "myShopifyDomain",
        value: sanitizeDomainField(debouncedValue),
      },
    })
  }, [debouncedValue])

  function onChange(newVal) {
    setVal(newVal)
  }

  return (
    <TextControl
      placeholder="yourstore.myshopify.com"
      label={state.t.a.shopifyDomain}
      value={val}
      onChange={onChange}
      disabled={state.hasCustomConnection}
    />
  )
}

export default wp.element.memo(MyShopifyDomain)
