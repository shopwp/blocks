import { useBlockState, useBlockDispatch } from "@shopwp/blocks"
import FilteringControls from "../../_controls/_groups/filtering"
import ProductGeneralControls from "../../_controls/_groups/product-general"
import ProductBuyButtonControls from "../../_controls/_groups/product-buy-button"
import ProductCheckoutControls from "../../_controls/_groups/product-checkout"

function BuyButtonControls({ layoutType }) {
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

      <PanelBody title={blockState.t.l.general} initialOpen={false}>
        <ProductGeneralControls
          settings={blockState.settings}
          dispatch={blockDispatch}
          translations={blockState.t}
          isLoading={blockState.isLoading}
        />
      </PanelBody>

      <PanelBody title={blockState.t.l.buyButton} initialOpen={true}>
        <ProductBuyButtonControls
          settings={blockState.settings}
          dispatch={blockDispatch}
          translations={blockState.t}
          isLoading={blockState.isLoading}
        />
      </PanelBody>

      <PanelBody title={blockState.t.l.checkout} initialOpen={false}>
        <ProductCheckoutControls
          settings={blockState.settings}
          dispatch={blockDispatch}
          translations={blockState.t}
          isLoading={blockState.isLoading}
        />
      </PanelBody>
    </InspectorControls>
  )
}

export default BuyButtonControls
