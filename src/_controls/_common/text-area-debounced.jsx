import { useDebounce } from "use-debounce"
import { useBlockDispatch } from "../../_state/hooks"

function TextAreaDebounced({
  defaultState = "",
  label,
  help = false,
  settingName,
  rows = 5,
  isHtml = false,
}) {
  const { useEffect, useState, useRef } = wp.element
  const { TextareaControl } = wp.components
  const [localVal, setLocalVal] = useState(defaultState)
  const [debouncedValue] = useDebounce(localVal, 300)
  const isFirstRender = useRef(true)
  const dispatch = useBlockDispatch()

  function onChange(newVal) {
    setLocalVal(newVal)
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (isHtml) {
      if (debouncedValue) {
        dispatch({
          type: "UPDATE_SETTING",
          payload: { key: settingName, value: btoa(debouncedValue) },
        })
      } else {
        dispatch({
          type: "UPDATE_SETTING",
          payload: { key: settingName, value: debouncedValue },
        })
      }
    } else {
      dispatch({
        type: "UPDATE_SETTING",
        payload: { key: settingName, value: debouncedValue },
      })
    }
  }, [debouncedValue])

  return (
    <TextareaControl
      label={label}
      value={localVal}
      help={help}
      onChange={onChange}
      rows={rows}
    />
  )
}

export default wp.element.memo(TextAreaDebounced)
