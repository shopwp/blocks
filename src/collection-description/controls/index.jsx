import FilterTextControl from "../../_controls/_common/filter-text-control"
import CollectionDescriptionControls from "../../_controls/_groups/collection-description"
import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function Controls({ layoutType }) {
  const { PanelBody } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  return (
    <>
      {layoutType !== "template-pdp" && layoutType !== "template-cdp" ? (
        <PanelBody title={blockState.t.l.filtering} initialOpen={false}>
          <FilterTextControl
            label={blockState.t.a.filterByTitle}
            help={blockState.t.a.filterByTitleHelp}
            name="collectionsTitle"
            isLoading={blockState.isLoading}
            settings={blockState.settings}
            dispatch={blockDispatch}
            translations={blockState.t}
          />
        </PanelBody>
      ) : null}

      <PanelBody title={blockState.t.l.description} initialOpen={true}>
        <CollectionDescriptionControls
          settings={blockState.settings}
          dispatch={blockDispatch}
          translations={blockState.t}
        />
      </PanelBody>
    </>
  )
}

export default Controls
