import { useDebounce } from "@shopwp/hooks"
import { useBlockDispatch } from "../../_state/hooks"

function TextControlDebounced({ state, label, help = false, settingName }) {
  const { useEffect, useState, useRef } = wp.element
  const { TextControl } = wp.components
  const [localVal, setLocalVal] = useState(state)
  const debouncedValue = useDebounce(localVal, 300)
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

    dispatch({
      type: "UPDATE_SETTING",
      payload: { key: settingName, value: localVal },
    })
  }, [debouncedValue])

  return (
    <TextControl
      label={label}
      value={localVal}
      help={help}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(TextControlDebounced)
