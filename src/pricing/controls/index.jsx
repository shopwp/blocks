import { useBlockState, useBlockDispatch } from "@shopwp/blocks"
import FilteringControls from "../../_controls/_groups/filtering"
import ProductPricingControls from "../../_controls/_groups/product-pricing"

function Controls({ layoutType }) {
  const { PanelBody } = wp.components
  const { InspectorControls } = wp.blockEditor

  const blockState = useBlockState()
  const blockDispatch = useBlockDispatch()

  return (
    <InspectorControls>
      {layoutType !== "template-pdp" ? (
        <PanelBody title={blockState.t.l.filtering} initialOpen={false}>
          <FilteringControls
            settings={blockState.settings}
            dispatch={blockDispatch}
            translations={blockState.t}
            single={true}
            isLoading={blockState.isLoading}
          />
        </PanelBody>
      ) : null}

      <PanelBody title={blockState.t.l.pricing} initialOpen={true}>
        <ProductPricingControls
          settings={blockState.settings}
          dispatch={blockDispatch}
          translations={blockState.t}
          isLoading={blockState.isLoading}
        />
      </PanelBody>
    </InspectorControls>
  )
}

export default Controls
