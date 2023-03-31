import BlockProvider from "../_state/provider"
import ProductsContent from "../products/content"

function BlockWrapper({ blockProps, children }) {
  wp.element.useEffect(() => {
    blockProps.setAttributes({
      clientId: blockProps.clientId,
    })
  }, [])

  return (
    <BlockProvider blockProps={blockProps}>
      {children}
      <ProductsContent />
    </BlockProvider>
  )
}

export default BlockWrapper
