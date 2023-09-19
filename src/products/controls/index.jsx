import { useBlockState, useBlockDispatch } from "../../_state/hooks"
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
import StorefrontControls from "../../_controls/_groups/storefront"
import SearchControls from "../../_controls/_groups/search"

function ProductsControls() {
  const { PanelBody } = wp.components
  const { InspectorControls } = wp.blockEditor
  const blockState = useBlockState()
  const blockDispatch = useBlockDispatch()

  return (
    <InspectorControls>
      {blockState.blockProps.name === "shopwp/search" ? (
        <PanelBody title={blockState.t.l.search} initialOpen={true}>
          <SearchControls
            settings={blockState.settings}
            dispatch={blockDispatch}
            translations={blockState.t}
            isLoading={blockState.isLoading}
          />
        </PanelBody>
      ) : null}

      {blockState.blockProps.name === "shopwp/storefront" ? (
        <PanelBody title={blockState.t.a.storefront} initialOpen={true}>
          <StorefrontControls
            settings={blockState.settings}
            dispatch={blockDispatch}
            translations={blockState.t}
            isLoading={blockState.isLoading}
          />
        </PanelBody>
      ) : null}

      {blockState.blockProps.attributes.layoutType !== "template-cdp" ? (
        <PanelBody title={blockState.t.l.filtering} initialOpen={false}>
          <FilteringControls
            settings={blockState.settings}
            dispatch={blockDispatch}
            translations={blockState.t}
            isLoading={blockState.isLoading}
          />
        </PanelBody>
      ) : null}

      <PanelBody title={blockState.t.l.sorting} initialOpen={false}>
        <ProductSortingControls
          settings={blockState.settings}
          dispatch={blockDispatch}
          translations={blockState.t}
          isLoading={blockState.isLoading}
          isFromCollection={
            blockState.queryType === "collectionProducts" ? true : false
          }
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
    </InspectorControls>
  )
}

export default ProductsControls
