import { useBlockState, useBlockDispatch } from "@shopwp/blocks"
import ProductReviewsControls from "../../_controls/_groups/product-reviews"

function Controls({ layoutType }) {
  const { PanelBody } = wp.components
  const { InspectorControls } = wp.blockEditor

  const blockState = useBlockState()
  const blockDispatch = useBlockDispatch()

  return (
    <InspectorControls>
      <PanelBody title={blockState.t.l.reviews} initialOpen={true}>
        <ProductReviewsControls
          settings={blockState.settings}
          dispatch={blockDispatch}
          translations={blockState.t}
          isLoading={blockState.isLoading}
          layoutType={layoutType}
        />
      </PanelBody>
    </InspectorControls>
  )
}

export default Controls
