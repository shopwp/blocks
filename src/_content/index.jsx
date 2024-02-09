/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { Shop } from "@shopwp/components"
import { useBlockState } from "../_state/hooks"

/*

The props passed to cloneElement are eventually passed down
to the SettingsProvider under <Items>

*/
function BlockContent({ children }) {
  const { useEffect, useState } = wp.element
  const blockState = useBlockState()

  const [ely, setEly] = useState(false)

  const select = wp.data.select,
    subscribe = wp.data.subscribe

  function whenEditorIsReady() {
    return new Promise((resolve) => {
      const unsubscribe = subscribe(() => {
        if (
          select("core/editor").isCleanNewPost() ||
          select("core/block-editor").getBlockCount() > 0
        ) {
          unsubscribe()
          resolve()
        }
      })
    })
  }

  async function boom() {
    await whenEditorIsReady()

    var eleee = document.getElementById(
      "block-" + blockState.blockProps.clientId
    )

    setEly(eleee)
  }

  useEffect(() => {
    boom()
  }, [])

  return (
    <Shop>
      {ely
        ? wp.element.cloneElement(children, {
            settings: blockState.settings,
            id: blockState.blockProps.clientId,
            element: ely,
            queryParams: blockState.queryParams,
            queryType: blockState.queryType,
            skeletonType: blockState.blockProps.name,
          })
        : null}
    </Shop>
  )
}

export default BlockContent
