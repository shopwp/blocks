/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { convertValuesToString } from "./"
import { useDebounce } from "@shopwp/hooks"
import { convertStringSelectionToArray } from "@shopwp/common"
import { fetchPostById } from "@shopwp/api"

function FilterTextControl({
  name,
  label,
  dispatch,
  settings,
  help = false,
  isLoading = false,
  disabled = false,
  collection = null,
}) {
  var valsToString = convertValuesToString(settings[name])

  const { useEffect, useState, useRef } = wp.element
  const { TextControl, Spinner } = wp.components
  const [localVal, setLocalVal] = useState(valsToString)
  const debouncedValue = useDebounce(localVal, 550)
  const isFirstRender = useRef(true)
  const [isTouched, setIsTouched] = useState(false)

  const spinnerStyles = css`
    position: absolute;
    top: 30px;
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
    input {
      opacity: ${isLoading ? "0.7" : "1"};
    }
  `

  function onChange(newVal) {
    setIsTouched(true)
    setLocalVal(newVal)
  }

  async function fetchPostData(postId) {
    try {
      const post = await fetchPostById(postId, "wps_products")

      dispatch({
        type: "SET_QUERY_TYPE",
        payload: "products",
      })

      dispatch({
        type: "UPDATE_SETTING",
        payload: { key: "postId", value: postId },
      })

      dispatch({
        type: "UPDATE_SETTING",
        payload: { key: "productId", value: post.meta.product_id },
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    var values = convertStringSelectionToArray(localVal)

    if (name === "postId") {
      var newActualNuim = parseInt(debouncedValue)
      if (isNaN(newActualNuim)) {
        return
      }

      fetchPostData(newActualNuim)
    } else {
      if (name === "collection") {
        // User clear out any collections values, reset to products query
        if (!values.length) {
          dispatch({
            type: "SET_QUERY_TYPE",
            payload: "products",
          })

          dispatch({
            type: "UPDATE_SETTING",
            payload: { key: "collection", value: false },
          })

          dispatch({
            type: "UPDATE_SETTING",
            payload: { key: "sortBy", value: "title" },
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

          return
        }

        if (!collection) {
          dispatch({
            type: "UPDATE_SETTING",
            payload: { key: "sortBy", value: "title" },
          })
        }

        dispatch({
          type: "SET_QUERY_TYPE",
          payload: "collectionProducts",
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

        dispatch({
          type: "UPDATE_SETTING",
          payload: { key: name, value: values },
        })
      } else {
        dispatch({
          type: "UPDATE_SETTING",
          payload: { key: name, value: values },
        })
      }
    }
  }, [debouncedValue])

  useEffect(() => {
    if (collection && name !== "collection") {
      setLocalVal("")
    }
  }, [collection])

  function onBlur() {
    setIsTouched(false)
  }
  return (
    <div css={filterWrapCSS}>
      {isLoading && isTouched ? (
        <div css={spinnerStyles}>
          <Spinner />
        </div>
      ) : null}

      <TextControl
        label={label}
        value={localVal}
        help={help}
        onChange={onChange}
        disabled={isLoading || disabled}
        onBlur={onBlur}
      />
    </div>
  )
}

export default FilterTextControl
