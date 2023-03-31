/** @jsx jsx */
import { jsx, css } from "@emotion/react"

const { Button } = wp.components
const { useEffect, useState } = wp.element

function ButtonReset({ state, dispatch, blockProps }) {
  const [isShowing, setIsShowing] = useState(false)

  const styles = css`
    margin: 2em 0 2em 3.5em;
    display: flex;
  `

  function onClick() {
    dispatch({ type: "RESET_SETTINGS", payload: blockProps })
  }

  useEffect(() => {
    if (state.settingsId === state.defaultSettingsId) {
      setIsShowing(false)
    } else {
      setIsShowing(true)
    }
  }, [blockProps.attributes.settingsId])

  return (
    isShowing && (
      <Button isSmall isSecondary css={styles} onClick={onClick}>
        Reset settings
      </Button>
    )
  )
}

export default wp.element.memo(ButtonReset)
