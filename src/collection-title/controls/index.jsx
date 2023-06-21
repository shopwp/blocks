import { useBlockState, useBlockDispatch } from "@shopwp/blocks"
import FilterTextControl from "../../_controls/_common/filter-text-control"
import CollectionTitleControls from "../../_controls/_groups/collection-title"

function Controls({ layoutType }) {
  const { PanelBody } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  return (
    <>
      {layoutType !== "template-pdp" && layoutType !== "template-cdp" ? (
        <PanelBody title={blockState.t.l.filtering} initialOpen={false}>
          <FilterTextControl
            name="collectionsTitle"
            label={blockState.t.a.filterByTitle}
            help={blockState.t.a.filterByTitleHelp}
            isLoading={blockState.isLoading}
            settings={blockState.settings}
            dispatch={blockDispatch}
          />
        </PanelBody>
      ) : null}

      <PanelBody title={blockState.t.l.title} initialOpen={true}>
        <CollectionTitleControls
          settings={blockState.settings}
          dispatch={blockDispatch}
          translations={blockState.t}
        />
      </PanelBody>
    </>
  )
}

export default Controls
