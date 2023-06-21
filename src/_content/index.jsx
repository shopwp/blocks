/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { Shop } from "@shopwp/components"
import { useBlockState } from "../_state/hooks"

function BlockContent({ children }) {
  const blockState = useBlockState()

  return (
    <Shop>
      {wp.element.cloneElement(children, {
        settings: blockState.settings,
        id: blockState.blockProps.clientId,
        element: blockState.componentElement,
        queryParams: blockState.queryParams,
        queryType: blockState.queryType,
        skeletonType: blockState.blockProps.name,
      })}
    </Shop>
  )
}

export default BlockContent
