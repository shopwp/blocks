import { useDebounce } from "@shopwp/hooks"

function StorefrontAccessToken({ state, dispatch }) {
  const { useEffect, useState, useRef } = wp.element
  const { TextControl } = wp.components
  const [val, setVal] = useState(getCachedValue())
  const debouncedValue = useDebounce(val, 250)
  const isFirstRender = useRef(true)

  function getCachedValue() {
    return shopwp.connection.storefront.storefrontAccessToken
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    dispatch({
      type: "UPDATE_SETTING",
      payload: { key: "storefrontAccessToken", value: debouncedValue },
    })

    wp.hooks.addFilter(
      "misc.shop.credentials",
      "shopwp",
      function (defaultVal) {
        return {
          domain: shopwp.connection.storefront.domain,
          storefrontAccessToken: debouncedValue,
        }
      }
    )
  }, [debouncedValue])

  function onChange(newVal) {
    setVal(newVal)
  }

  return (
    <TextControl
      placeholder={state.t.a.enterAccessToken}
      label={state.t.a.accessToken}
      value={val}
      onChange={onChange}
      disabled={state.hasCustomConnection}
    />
  )
}

export default wp.element.memo(StorefrontAccessToken)
