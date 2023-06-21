import { useBlockState, useBlockDispatch } from "@shopwp/blocks"
import CollectionImagesControls from "../../_controls/_groups/collection-images"
import FilterTextControl from "../../_controls/_common/filter-text-control"

function Controls({ layoutType }) {
  const { PanelBody } = wp.components

  const blockState = useBlockState()
  const blockDispatch = useBlockDispatch()

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

      <PanelBody title="Collection Images" initialOpen={true}>
        <CollectionImagesControls
          settings={blockState.settings}
          dispatch={blockDispatch}
          translations={blockState.t}
        />
      </PanelBody>
    </>
  )
}

export default Controls
