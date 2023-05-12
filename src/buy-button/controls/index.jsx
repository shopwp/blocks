import FilteringControls from "../../_controls/_groups/filtering"
import GeneralControls from "../../_controls/_groups/general"
import ButtonControls from "../../_controls/_groups/buy-button"
import CheckoutControls from "../../_controls/_groups/checkout"
import { useBlockState } from "@shopwp/blocks"

function BuyButtonControls() {
  const { PanelBody } = wp.components
  const { InspectorControls } = wp.blockEditor
  const { settings, t } = useBlockState()

  return (
    <InspectorControls>
      <PanelBody title={t.l.filtering} initialOpen={false}>
        <FilteringControls settings={settings} single={true} />
      </PanelBody>

      <PanelBody title={t.l.general} initialOpen={false}>
        <GeneralControls settings={settings} />
      </PanelBody>

      <PanelBody title={t.l.buyButton} initialOpen={false}>
        <ButtonControls settings={settings} />
      </PanelBody>

      <PanelBody title={t.l.checkout} initialOpen={false}>
        <CheckoutControls settings={settings} />
      </PanelBody>
    </InspectorControls>
  )
}

export default BuyButtonControls
