import { useDebounce } from "@shopwp/hooks"

function NoResultsText({ state, dispatch }) {
  const { useEffect, useState, useRef } = wp.element
  const { TextControl } = wp.components
  const [localVal, setLocalVal] = useState(state.settings.noResultsText)
  const debouncedValue = useDebounce(localVal, 250)
  const isFirstRender = useRef(true)

  function onChange(newVal) {
    setLocalVal(newVal)
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (localVal !== state.settings.noResultsText) {
      dispatch({
        type: "UPDATE_SETTING",
        payload: { key: "noResultsText", value: localVal },
      })
    }
  }, [debouncedValue])

  useEffect(() => {
    setLocalVal(state.settings.noResultsText)
  }, [state.settings.noResultsText])

  return (
    <TextControl
      label={state.t.a.noResultsText}
      value={localVal}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(NoResultsText)
