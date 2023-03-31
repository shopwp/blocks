/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { useBlockState, useBlockDispatch } from "BlockState"

function Reverse({ reverse, isLoading }) {
  const { CheckboxControl, Spinner } = wp.components

  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  const spinnerStyles = css`
    position: absolute;
    top: 3px;
    right: -5px;
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
    blockDispatch({ type: "SET_IS_LOADING", payload: true })
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "reverse", value: newVal },
    })
  }

  return (
    <div css={filterWrapCSS}>
      {isLoading && (
        <div css={spinnerStyles}>
          <Spinner />
        </div>
      )}
      <CheckboxControl
        label={blockState.t.a.reverseOrder}
        checked={reverse}
        onChange={onChange}
      />
    </div>
  )
}

export default wp.element.memo(Reverse)
