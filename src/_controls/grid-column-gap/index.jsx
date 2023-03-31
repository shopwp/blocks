import { useDebounce } from "use-debounce"
import { useBlockState, useBlockDispatch } from "BlockState"

function GridColumnGap({ gridColumnGap }) {
  const { useEffect, useState } = wp.element
  const { RangeControl } = wp.components
  const [localVal, setLocalVal] = useState(() => {
    var parts = gridColumnGap.split("px")

    return parseInt(parts[0])
  })
  const [debouncedValue] = useDebounce(localVal, 50)
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    setLocalVal(newVal)
  }

  useEffect(() => {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "gridColumnGap", value: debouncedValue + "px" },
    })
  }, [debouncedValue])

  return (
    <RangeControl
      label={blockState.t.a.spaceBetween}
      value={localVal}
      onChange={onChange}
      max={500}
    />
  )
}

export default wp.element.memo(GridColumnGap)
