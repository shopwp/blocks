import BlockControls from "../../_controls"
import FilteringControls from "../../_controls/_groups/filtering"
import GeneralControls from "../../_controls/_groups/general"
import LayoutControls from "../../_controls/_groups/layout"
import TitleControls from "../../_controls/_groups/title"
import DescriptionControls from "../../_controls/_groups/description"
import PricingControls from "../../_controls/_groups/pricing"
import ImagesControls from "../../_controls/_groups/images"
import ButtonControls from "../../_controls/_groups/buy-button"
import CheckoutControls from "../../_controls/_groups/checkout"
import SortingControls from "../../_controls/_groups/sorting"
import PaginationControls from "../../_controls/_groups/pagination"
import TemplateControls from "../../_controls/_groups/template"
import { useBlockState } from "../../_state/hooks"

function ProductsControls() {
  const { PanelBody } = wp.components

  const { settings: settings, t } = useBlockState()

  return (
    <BlockControls>
      <PanelBody title={t.l.filtering} initialOpen={false}>
        <FilteringControls settings={settings} />
      </PanelBody>

      <PanelBody title={t.l.sorting} initialOpen={false}>
        <SortingControls settings={settings} />
      </PanelBody>

      <PanelBody title={t.l.pagination} initialOpen={false}>
        <PaginationControls settings={settings} />
      </PanelBody>

      <PanelBody title={t.l.general} initialOpen={false}>
        <GeneralControls settings={settings} />
      </PanelBody>

      <PanelBody title={t.l.layout} initialOpen={false}>
        <LayoutControls settings={settings} />
      </PanelBody>

      <PanelBody title={t.l.title} initialOpen={false}>
        <TitleControls settings={settings} />
      </PanelBody>

      <PanelBody title={t.l.description} initialOpen={false}>
        <DescriptionControls settings={settings} />
      </PanelBody>

      <PanelBody title={t.l.pricing} initialOpen={false}>
        <PricingControls settings={settings} />
      </PanelBody>

      <PanelBody title={t.l.images} initialOpen={false}>
        <ImagesControls settings={settings} />
      </PanelBody>

      <PanelBody title={t.l.buyButton} initialOpen={false}>
        <ButtonControls settings={settings} />
      </PanelBody>

      <PanelBody title={t.l.checkout} initialOpen={false}>
        <CheckoutControls settings={settings} />
      </PanelBody>

      <PanelBody title={t.a.template} initialOpen={false}>
        <TemplateControls settings={settings} />
      </PanelBody>
    </BlockControls>
  )
}

export default ProductsControls
