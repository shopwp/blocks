import { useDebounce } from "@shopwp/hooks"
import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function ItemsPerRow({ itemsPerRow }) {
  const { useEffect, useState, useRef } = wp.element
  const { RangeControl } = wp.components
  const [localVal, setLocalVal] = useState(itemsPerRow)
  const debouncedValue = useDebounce(localVal, 100)
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
      payload: { key: "itemsPerRow", value: debouncedValue },
    })
  }, [debouncedValue])

  return (
    <RangeControl
      label={blockState.t.a.itemsPerRow}
      value={localVal}
      onChange={onChange}
      min={1}
      max={20}
    />
  )
}

export default wp.element.memo(ItemsPerRow)
