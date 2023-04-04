import { useDebounce } from "use-debounce"
import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function DescriptionLength({ length }) {
  const { useEffect, useState, useRef } = wp.element
  const { RangeControl } = wp.components
  const [localVal, setLocalVal] = useState(length)
  const [debouncedValue] = useDebounce(localVal, 10)
  const isFirstRender = useRef(true)
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    setLocalVal(newVal)
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "descriptionLength", value: debouncedValue },
    })
  }, [debouncedValue])

  useEffect(() => {
    setLocalVal(length)
  }, [length])

  return (
    <RangeControl
      label={blockState.t.a.limitDesc}
      help={blockState.t.a.limitDescHelp}
      value={localVal}
      onChange={onChange}
      min={1}
      max={200}
    />
  )
}

export default wp.element.memo(DescriptionLength)
