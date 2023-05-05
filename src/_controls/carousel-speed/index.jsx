/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { useBlockState, useBlockDispatch } from "@shopwp/blocks"
import { useDebounce } from "@shopwp/hooks"

function CarouselSpeed({ speed }) {
  const { useEffect, useState, useRef } = wp.element
  const { RangeControl } = wp.components
  const [localVal, setLocalVal] = useState(speed)
  const debouncedValue = useDebounce(localVal, 150)
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
      payload: { key: "carouselSpeed", value: debouncedValue },
    })
  }, [debouncedValue])

  return (
    <div>
      <RangeControl
        label={blockState.t.a.carouselSpeed}
        value={localVal}
        onChange={onChange}
        min={100}
        step={100}
        max={4000}
      />
    </div>
  )
}

export default wp.element.memo(CarouselSpeed)
