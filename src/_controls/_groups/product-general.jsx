import { Select, Toggle } from "@shopwp/wp-ui"

function ProductGeneralControls({ settings, dispatch, translations }) {
  return (
    <>
      <Select
        name="linkTo"
        label={translations.a.shouldLinkTo}
        help={translations.a.shouldLinkToHelp}
        disabled={settings.directCheckout}
        options={[
          { label: "WordPress", value: "wordpress" },
          { label: "Shopify", value: "shopify" },
          { label: translations.a.none, value: "none" },
          { label: translations.a.modal, value: "modal" },
        ]}
        settings={settings}
        dispatch={dispatch}
      />

      <Select
        name="linkTarget"
        label={translations.a.linksShouldOpenIn}
        options={[
          {
            label: translations.a.currentTab,
            value: "_self",
          },
          { label: translations.a.newTab, value: "_blank" },
        ]}
        settings={settings}
        dispatch={dispatch}
        disabled={settings.linkTo === "none"}
      />

      <Toggle
        name="linkWithBuyButton"
        label={translations.a.linkBuyButton}
        settings={settings}
        dispatch={dispatch}
      />
    </>
  )
}

export default ProductGeneralControls
