/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import without from "lodash/without"
import { useBlockState, useBlockDispatch } from "BlockState"

function Excludes({ excludes }) {
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()
  const { useEffect, useState, useRef } = wp.element
  const { CheckboxControl, BaseControl } = wp.components
  const [excludesState, setExcludesState] = useState(excludes)
  const isFirstRender = useRef(true)

  const excludeCSS = css`
    && {
      margin-bottom: 3px;
    }
  `

  function inState(excludesState, type) {
    if (excludesState.includes(type)) {
      return true
    } else {
      return false
    }
  }

  function onChange(isChecked, type) {
    if (isChecked && inState(excludesState, type)) {
      return
    }

    if (isChecked) {
      setExcludesState(excludesState.concat([type]))
    } else {
      var asfokasod = without(excludesState, type)

      setExcludesState(asfokasod)
    }
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "excludes", value: excludesState },
    })
  }, [excludesState])

  function Title() {
    return (
      <CheckboxControl
        label={blockState.t.l.title}
        checked={inState(excludesState, "title")}
        onChange={(isChecked) => onChange(isChecked, "title")}
      />
    )
  }

  function Description() {
    return (
      <CheckboxControl
        label={blockState.t.l.description}
        checked={inState(excludesState, "description")}
        onChange={(isChecked) => onChange(isChecked, "description")}
      />
    )
  }

  function Images() {
    return (
      <CheckboxControl
        label={blockState.t.l.images}
        checked={inState(excludesState, "images")}
        onChange={(isChecked) => onChange(isChecked, "images")}
      />
    )
  }

  function Pricing() {
    return (
      <CheckboxControl
        label={blockState.t.l.pricing}
        checked={inState(excludesState, "pricing")}
        onChange={(isChecked) => onChange(isChecked, "pricing")}
      />
    )
  }

  function BuyButton() {
    return (
      <CheckboxControl
        label={blockState.t.l.buyButton}
        checked={inState(excludesState, "buy-button")}
        onChange={(isChecked) => onChange(isChecked, "buy-button")}
      />
    )
  }

  return (
    <>
      <BaseControl css={excludeCSS} label={blockState.t.a.excludeLayout} />
      <Title />
      <Description />
      <Images />
      <Pricing />
      <BuyButton />
    </>
  )
}

export default wp.element.memo(Excludes)
