import { useBlockState, useBlockDispatch } from "../../_state/hooks"
import FilterTextControl from "../../_controls/_common/filter-text-control"
import FilteringControls from "../../_controls/_groups/filtering"
import ProductSortingControls from "../../_controls/_groups/product-sorting"
import ProductPaginationControls from "../../_controls/_groups/product-pagination"
import ProductGeneralControls from "../../_controls/_groups/product-general"
import ProductLayoutControls from "../../_controls/_groups/product-layout"
import ProductTitleControls from "../../_controls/_groups/product-title"
import ProductDescriptionControls from "../../_controls/_groups/product-description"
import ProductPricingControls from "../../_controls/_groups/product-pricing"
import ProductImagesControls from "../../_controls/_groups/product-images"
import ProductBuyButtonControls from "../../_controls/_groups/product-buy-button"
import ProductCheckoutControls from "../../_controls/_groups/product-checkout"
import ProductTemplateControls from "../../_controls/_groups/product-template"
import CollectionSortingControls from "../../_controls/_groups/collection-sorting"
import CollectionPaginationControls from "../../_controls/_groups/collection-pagination"
import CollectionLayoutControls from "../../_controls/_groups/collection-layout"
import CollectionTitleControls from "../../_controls/_groups/collection-title"
import CollectionDescriptionControls from "../../_controls/_groups/collection-description"
import CollectionImagesControls from "../../_controls/_groups/collection-images"

function CollectionsControls() {
  const { PanelBody } = wp.components
  const { InspectorControls } = wp.blockEditor

  const blockState = useBlockState()
  const blockDispatch = useBlockDispatch()

  return (
    <InspectorControls>
      <PanelBody title="Collection Filtering" initialOpen={true}>
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
      <PanelBody title="Collection Sorting" initialOpen={false}>
        <CollectionSortingControls
          settings={blockState.settings}
          dispatch={blockDispatch}
          translations={blockState.t}
          isLoading={blockState.isLoading}
        />
      </PanelBody>
      <PanelBody title="Collection Pagination" initialOpen={false}>
        <CollectionPaginationControls
          settings={blockState.settings}
          dispatch={blockDispatch}
          translations={blockState.t}
          isLoading={blockState.isLoading}
        />
      </PanelBody>
      <PanelBody title="Collection Layout" initialOpen={false}>
        <CollectionLayoutControls
          settings={blockState.settings}
          dispatch={blockDispatch}
          translations={blockState.t}
          isLoading={blockState.isLoading}
        />
      </PanelBody>
      <PanelBody title="Collection Title" initialOpen={false}>
        <CollectionTitleControls
          settings={blockState.settings}
          dispatch={blockDispatch}
          translations={blockState.t}
          isLoading={blockState.isLoading}
        />
      </PanelBody>
      <PanelBody title="Collection Description" initialOpen={false}>
        <CollectionDescriptionControls
          settings={blockState.settings}
          dispatch={blockDispatch}
          translations={blockState.t}
          isLoading={blockState.isLoading}
        />
      </PanelBody>
      <PanelBody title="Collection Images" initialOpen={false}>
        <CollectionImagesControls
          settings={blockState.settings}
          dispatch={blockDispatch}
          translations={blockState.t}
          isLoading={blockState.isLoading}
        />
      </PanelBody>

      {!blockState.settings.collectionsExcludes.includes("products") ? (
        <>
          <PanelBody title={blockState.t.l.sorting} initialOpen={false}>
            <ProductSortingControls
              settings={blockState.settings}
              dispatch={blockDispatch}
              translations={blockState.t}
              isLoading={blockState.isLoading}
            />
          </PanelBody>
          <PanelBody title={blockState.t.l.pagination} initialOpen={false}>
            <ProductPaginationControls
              settings={blockState.settings}
              dispatch={blockDispatch}
              translations={blockState.t}
              isLoading={blockState.isLoading}
            />
          </PanelBody>
          <PanelBody title={blockState.t.l.general} initialOpen={false}>
            <ProductGeneralControls
              settings={blockState.settings}
              dispatch={blockDispatch}
              translations={blockState.t}
              isLoading={blockState.isLoading}
            />
          </PanelBody>
          <PanelBody title={blockState.t.l.layout} initialOpen={false}>
            <ProductLayoutControls
              blockName={blockState.blockProps.name}
              settings={blockState.settings}
              dispatch={blockDispatch}
              translations={blockState.t}
              isLoading={blockState.isLoading}
            />
          </PanelBody>
          <PanelBody title={blockState.t.l.title} initialOpen={false}>
            <ProductTitleControls
              settings={blockState.settings}
              dispatch={blockDispatch}
              translations={blockState.t}
              isLoading={blockState.isLoading}
            />
          </PanelBody>
          <PanelBody title={blockState.t.l.description} initialOpen={false}>
            <ProductDescriptionControls
              settings={blockState.settings}
              dispatch={blockDispatch}
              translations={blockState.t}
              isLoading={blockState.isLoading}
            />
          </PanelBody>
          <PanelBody title={blockState.t.l.pricing} initialOpen={false}>
            <ProductPricingControls
              settings={blockState.settings}
              dispatch={blockDispatch}
              translations={blockState.t}
              isLoading={blockState.isLoading}
            />
          </PanelBody>
          <PanelBody title={blockState.t.l.images} initialOpen={false}>
            <ProductImagesControls
              settings={blockState.settings}
              dispatch={blockDispatch}
              translations={blockState.t}
              isLoading={blockState.isLoading}
            />
          </PanelBody>
          <PanelBody title={blockState.t.l.buyButton} initialOpen={false}>
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

          <PanelBody title={blockState.t.a.template} initialOpen={false}>
            <ProductTemplateControls
              settings={blockState.settings}
              dispatch={blockDispatch}
              translations={blockState.t}
              isLoading={blockState.isLoading}
            />
          </PanelBody>
        </>
      ) : null}
    </InspectorControls>
  )
}

export default CollectionsControls
