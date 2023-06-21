import { useDebounce } from "@shopwp/hooks"
import { useBlockDispatch } from "../../_state/hooks"

function TextControlDebounced({
  state,
  label,
  help = false,
  settingName,
  placeholder = "",
  fallback = "",
}) {
  const { useEffect, useState } = wp.element
  const { TextControl } = wp.components
  const [localVal, setLocalVal] = useState(() => (state ? state : ""))
  const debouncedValue = useDebounce(localVal, 300)
  const dispatch = useBlockDispatch()

  function onChange(newVal) {
    setLocalVal(newVal)
  }

  useEffect(() => {
    dispatch({
      type: "UPDATE_SETTING",
      payload: {
        key: settingName,
        value: localVal ? localVal : fallback,
      },
    })
  }, [debouncedValue])

  return (
    <TextControl
      label={label}
      value={localVal}
      help={help}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default wp.element.memo(TextControlDebounced)
