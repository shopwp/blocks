import FilteringControls from "../../_controls/_groups/filtering"
import GeneralControls from "../../_controls/_groups/general"
import ButtonControls from "../../_controls/_groups/buy-button"
import CheckoutControls from "../../_controls/_groups/checkout"
import BlockControls from "../../_controls"
import { useBlockState } from "BlockState"

function BuyButtonControls() {
  const { PanelBody } = wp.components

  const { settings, t } = useBlockState()

  return (
    <BlockControls>
      <PanelBody
        title={t.l.filtering}
        initialOpen={false}
        className="wps-panel-body"
      >
        <FilteringControls settings={settings} single={true} />
      </PanelBody>

      <PanelBody
        title={t.l.general}
        initialOpen={false}
        className="wps-panel-body"
      >
        <GeneralControls settings={settings} />
      </PanelBody>

      <PanelBody
        title={t.l.buyButton}
        initialOpen={false}
        className="wps-panel-body"
      >
        <ButtonControls settings={settings} />
      </PanelBody>

      <PanelBody
        title={t.l.checkout}
        initialOpen={false}
        className="wps-panel-body"
      >
        <CheckoutControls settings={settings} />
      </PanelBody>
    </BlockControls>
  )
}

export default BuyButtonControls
