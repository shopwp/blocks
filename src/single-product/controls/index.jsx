import FilteringControls from "../../_controls/_groups/filtering"
import GeneralControls from "../../_controls/_groups/general"
import LayoutControls from "../../_controls/_groups/layout"
import TitleControls from "../../_controls/_groups/title"
import DescriptionControls from "../../_controls/_groups/description"
import PricingControls from "../../_controls/_groups/pricing"
import ImagesControls from "../../_controls/_groups/images"
import ButtonControls from "../../_controls/_groups/buy-button"
import CheckoutControls from "../../_controls/_groups/checkout"
import SubscriptionsControls from "../../_controls/_groups/subscriptions"
import TemplateControls from "../../_controls/_groups/template"
import BlockControls from "../../_controls"
import { useBlockState } from "../../_state/hooks"

function SingleProductControls() {
  const { PanelBody } = wp.components

  const { settings: settings, t: t } = useBlockState()

  return (
    <BlockControls>
      <PanelBody title={t.l.filtering} initialOpen={true}>
        <FilteringControls settings={settings} single={true} />
      </PanelBody>

      <PanelBody title={t.l.general} initialOpen={false}>
        <GeneralControls settings={settings} />
      </PanelBody>

      <PanelBody title={t.l.layout} initialOpen={false}>
        <LayoutControls settings={settings} isSingle={true} />
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

      <PanelBody title={t.l.subscriptions} initialOpen={false}>
        <SubscriptionsControls settings={settings} />
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

export default SingleProductControls
