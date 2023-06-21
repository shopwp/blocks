import FilteringControls from "../../_controls/_groups/filtering"
import ProductDescriptionControls from "../../_controls/_groups/product-description"
import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

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

      <PanelBody title={blockState.t.l.description} initialOpen={true}>
        <ProductDescriptionControls
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
