/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { useBlockState, useBlockDispatch } from "../../_state/hooks"

function SortBy({ sortBy, isLoading, collection }) {
  const { SelectControl, Spinner } = wp.components
  const { useEffect, useRef } = wp.element
  const dispatch = useBlockDispatch()
  const blockState = useBlockState()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (collection && sortBy !== "title") {
      dispatch({
        type: "UPDATE_SETTING",
        payload: { key: "sortBy", value: "title" },
      })
    } else {
      if (!collection) {
        dispatch({
          type: "UPDATE_SETTING",
          payload: { key: "sortBy", value: "title" },
        })
      }
    }
  }, [collection])

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

  const productSortOptions = [
    { label: blockState.t.l.title, value: "title" },
    { label: blockState.t.l.vendor, value: "vendor" },
    { label: "ID", value: "id" },
    { label: blockState.t.l.price, value: "price" },
    {
      label: blockState.t.l.bestSelling,
      value: "best_selling",
    },
    {
      label: blockState.t.l.productType,
      value: "product_type",
    },
    {
      label: blockState.t.a.createdAt,
      value: "created_at",
    },
    {
      label: blockState.t.a.updatedAt,
      value: "updated_at",
    },
  ]

  const collectionSortOptions = [
    { label: blockState.t.l.title, value: "title" },
    { label: blockState.t.l.price, value: "price" },
    { label: blockState.t.a.created, value: "created" },
    { label: "ID", value: "id" },
    { label: blockState.t.l.bestSelling, value: "best_selling" },
    { label: blockState.t.l.collectionDefault, value: "collection_default" },
    { label: blockState.t.l.collectionManual, value: "manual" },
  ]

  function onChange(newVal) {
    dispatch({ type: "SET_IS_LOADING", payload: true })
    dispatch({
      type: "UPDATE_SETTING",
      payload: { key: "sortBy", value: newVal },
    })
  }

  return (
    <div css={filterWrapCSS}>
      {isLoading && (
        <div css={spinnerStyles}>
          <Spinner />
        </div>
      )}
      <SelectControl
        label={blockState.t.l.sort}
        help={blockState.t.a.sortHelp}
        value={sortBy}
        options={collection ? collectionSortOptions : productSortOptions}
        onChange={onChange}
      />
    </div>
  )
}

export default wp.element.memo(SortBy)
