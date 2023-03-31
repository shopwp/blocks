import { useDebounce } from "use-debounce"
import { useBlockState, useBlockDispatch } from "BlockState"

function FontSizePickerControl({ fontSize, defaultValue, label, settingName }) {
  const { useEffect, useState, useRef } = wp.element
  const { FontSizePicker, BaseControl } = wp.components
  const [localVal, setLocalVal] = useState(getVal())
  const [debouncedValue] = useDebounce(localVal, 10)
  const isFirstRender = useRef(true)
  const dispatch = useBlockDispatch()
  const blockState = useBlockState()

  const fontSizes = [
    {
      name: blockState.t.a.small,
      slug: "small",
      size: 18,
    },
    {
      name: blockState.t.a.medium,
      slug: "medium",
      size: 22,
    },
    {
      name: blockState.t.a.large,
      slug: "big",
      size: 28,
    },
  ]

  function getSizeIntFromString(value) {
    return parseInt(value.split("px")[0])
  }

  function getVal(maybeSize) {
    if (!maybeSize) {
      return defaultValue
    }

    return getSizeIntFromString(maybeSize)
  }

  function onChange(newFontSize) {
    setLocalVal(newFontSize)
  }

  function convertToString(value) {
    return value + "px"
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (!debouncedValue) {
      var newVal = defaultValue
    } else {
      var newVal = debouncedValue
    }

    dispatch({
      type: "UPDATE_SETTING",
      payload: { key: settingName, value: convertToString(newVal) },
    })
  }, [debouncedValue])

  return (
    <BaseControl>
      <FontSizePicker
        fontSizes={fontSizes}
        value={getVal(fontSize)}
        fallbackFontSize={defaultValue}
        withSlider={true}
        onChange={onChange}
      />
    </BaseControl>
  )
}

export default wp.element.memo(FontSizePickerControl)
