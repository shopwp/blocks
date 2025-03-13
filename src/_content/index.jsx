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

  const [element, setElement] = useState(false)

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

  async function run() {
    await whenEditorIsReady()

    const element = document.getElementById(
      "block-" + blockState.blockProps.clientId
    )

    setElement(element)
  }

  useEffect(() => {
    run()
  }, [])

  return (
    <Shop>
      {element
        ? wp.element.cloneElement(children, {
            settings: blockState.settings,
            id: blockState.blockProps.clientId,
            element: element,
            queryParams: blockState.queryParams,
            queryType: blockState.queryType,
            skeletonType: blockState.blockProps.name,
          })
        : null}
    </Shop>
  )
}

export default BlockContent
