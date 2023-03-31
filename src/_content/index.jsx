/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { Shop } from "Components"
import { encodeSettings, compareSettings } from "Common"
import { useBlockState } from "../_state/hooks"

function BlockContent({ children }) {
  const { useEffect } = wp.element

  const state = useBlockState()

  useEffect(() => {
    var settings = compareSettings(state.settings, state.defaultSettings)

    if (!settings) {
      return
    }

    state.blockProps.setAttributes({
      settingsId: encodeSettings(settings),
    })
  }, [state.settings])

  return (
    <Shop>
      {wp.element.cloneElement(children, {
        settings: state.settings,
        id: state.blockProps.clientId,
        element: state.componentElement,
        isLoading: state.isLoading,
        queryParams: state.queryParams,
        queryType: state.queryType,
      })}
    </Shop>
  )
}
export default BlockContent
