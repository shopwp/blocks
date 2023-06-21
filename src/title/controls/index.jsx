import FilteringControls from "../../_controls/_groups/filtering"
import ProductTitleControls from "../../_controls/_groups/product-title"
import ProductGeneralControls from "../../_controls/_groups/product-general"
import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function Controls({ layoutType }) {
  const { PanelBody } = wp.components

  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  return (
    <>
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

      <PanelBody title={blockState.t.l.title} initialOpen={true}>
        <ProductTitleControls
          settings={blockState.settings}
          dispatch={blockDispatch}
          translations={blockState.t}
        />
      </PanelBody>

      <PanelBody title={blockState.t.l.general} initialOpen={true}>
        <ProductGeneralControls
          settings={blockState.settings}
          dispatch={blockDispatch}
          translations={blockState.t}
        />
      </PanelBody>
    </>
  )
}

export default Controls
