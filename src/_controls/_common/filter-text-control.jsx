/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { convertValuesToString, removeEmptyValues } from "./"
import { useDebounce } from "@shopwp/hooks"
import { useBlockDispatch } from "../../_state/hooks"

function FilterTextControl({
  state,
  label,
  help,
  settingName,
  isLoading,
  disabled = false,
  collection = null,
}) {
  const { useEffect, useState, useRef } = wp.element
  const { TextControl, Spinner } = wp.components
  const [localVal, setLocalVal] = useState(convertValuesToString(state))
  const debouncedValue = useDebounce(localVal, 250)
  const isFirstRender = useRef(true)
  const [isTouched, setIsTouched] = useState(false)
  const dispatch = useBlockDispatch()

  const spinnerStyles = css`
    position: absolute;
    top: 27px;
    right: 0px;
    margin: 0;
    background: white;
    padding: 0px 8px;

    .components-spinner {
      margin: 0;
    }
  `

  const filterWrapCSS = css`
    position: relative;
  `

  function onChange(newVal) {
    setLocalVal(newVal)
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    var newVal = removeEmptyValues(localVal)

    if (settingName === "collection" && newVal.length) {
      dispatch({
        type: "SET_QUERY_TYPE",
        payload: "collectionProducts",
      })

      dispatch({
        type: "SET_COLLECTION_TITLES",
        payload: newVal[0],
      })

      dispatch({
        type: "UPDATE_SETTING",
        payload: { key: "tag", value: false },
      })

      dispatch({
        type: "UPDATE_SETTING",
        payload: { key: "vendor", value: false },
      })

      dispatch({
        type: "UPDATE_SETTING",
        payload: { key: "productType", value: false },
      })

      dispatch({
        type: "UPDATE_SETTING",
        payload: { key: "title", value: false },
      })
    } else {
      dispatch({
        type: "SET_QUERY_TYPE",
        payload: "products",
      })

      dispatch({
        type: "SET_COLLECTION_TITLES",
        payload: false,
      })
    }

    setIsTouched(true)

    dispatch({
      type: "UPDATE_SETTING",
      payload: { key: settingName, value: newVal },
    })
  }, [debouncedValue])

  useEffect(() => {
    if (!isLoading) {
      setIsTouched(false)
    }
  }, [isLoading])

  useEffect(() => {
    if (collection && settingName !== "collection") {
      setLocalVal("")
    }
  }, [collection])

  return (
    <div css={filterWrapCSS}>
      {isLoading && isTouched && (
        <div css={spinnerStyles}>
          <Spinner />
        </div>
      )}

      <TextControl
        label={label}
        value={localVal}
        help={help}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  )
}

export default wp.element.memo(FilterTextControl)
