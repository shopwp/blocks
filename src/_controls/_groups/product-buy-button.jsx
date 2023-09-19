import { FontSize, Color, TextControl, Toggle, Select } from "@shopwp/wp-ui"
import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function ProductBuyButtonControls({ settings, dispatch, translations }) {
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  return (
    <>
      <FontSize
        name="addToCartButtonTypeFontSize"
        label="Buy button font size"
        translations={translations}
        settings={blockState.settings}
        dispatch={blockDispatch}
      />

      <Color
        name="addToCartButtonColor"
        label={translations.a.addCartColor}
        settings={settings}
        dispatch={dispatch}
      />

      <Color
        name="addToCartButtonTextColor"
        label={translations.a.addCartTextColor}
        settings={settings}
        dispatch={dispatch}
      />

      <TextControl
        name="addToCartButtonText"
        label={translations.a.addCartText}
        settings={settings}
        dispatch={dispatch}
        placeholder="Enter custom add to cart text"
      />

      <TextControl
        name="afterAddedText"
        label={translations.a.textAfterAdding}
        settings={settings}
        dispatch={dispatch}
      />

      <Select
        name="variantStyle"
        label={translations.a.variantsStyle}
        options={[
          {
            label: translations.a.dropdown,
            value: "dropdown",
          },
          { label: translations.a.buttons, value: "buttons" },
        ]}
        settings={settings}
        dispatch={dispatch}
      />

      <Color
        name="variantLabelTextColor"
        label={translations.a.variantLabelTextColor}
        settings={settings}
        dispatch={dispatch}
      />

      <FontSize
        name="variantDropdownTypeFontSize"
        label="Variant label font size"
        translations={translations}
        settings={blockState.settings}
        dispatch={blockDispatch}
      />

      {settings.variantStyle === "dropdown" ? (
        <>
          <Color
            name="variantDropdownButtonColor"
            label={translations.a.variantDropdowns}
            settings={settings}
            dispatch={dispatch}
          />
          <Color
            name="variantDropdownButtonTextColor"
            label={translations.a.variantDropdownsBtnColor}
            settings={settings}
            dispatch={dispatch}
          />
        </>
      ) : null}

      <Toggle
        name="hideQuantity"
        label={translations.a.hideQuant}
        settings={settings}
        dispatch={dispatch}
      />

      <TextControl
        name="minQuantity"
        label={translations.a.minQuant}
        settings={settings}
        dispatch={dispatch}
        type="Number"
      />

      <TextControl
        name="maxQuantity"
        label={translations.a.maxQuant}
        settings={settings}
        dispatch={dispatch}
        type="Number"
      />

      <Toggle
        name="subscriptions"
        label={translations.a.showSubsWidget}
        settings={settings}
        dispatch={dispatch}
      />

      <Toggle
        name="subscriptionsSelectOnLoad"
        label={blockState.t.a.selectSubOnLoad}
        settings={settings}
        dispatch={dispatch}
      />

      <Toggle
        name="selectFirstVariant"
        label={translations.a.selectFirstVariant}
        settings={settings}
        dispatch={dispatch}
      />

      <Toggle
        name="resetVariantsAfterAdding"
        label={translations.a.resetAfterAdding}
        settings={settings}
        dispatch={dispatch}
      />
    </>
  )
}

export default ProductBuyButtonControls
