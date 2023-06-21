import { useBlockState, useBlockDispatch } from "../../_state/hooks"
import { defaultColors } from "../../_controls/_common"

const TextControlDebounced = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlTextControlDebounced-admin' */ "../../_controls/_common/text-control-debounced"
  )
)

const Toggle = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlToggle-admin' */ "../../_controls/_common/toggle-control"
  )
)

function CartIconControls() {
  const { Suspense } = wp.element
  const { PanelBody, BaseControl, ColorPalette, Spinner } = wp.components
  const { InspectorControls } = wp.blockEditor
  const blockState = useBlockState()
  const blockDispatch = useBlockDispatch()
  const colors = defaultColors()

  function onChange(newColor, settingKey) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: settingKey, value: newColor },
    })
  }
  return (
    <InspectorControls>
      <PanelBody title={"Cart Icon"} initialOpen={true}>
        <Suspense fallback={<Spinner />}>
          <TextControlDebounced
            settingName="icon"
            label={blockState.t.a.icon}
            state={blockState.settings.icon}
            placeholder="Enter a URL to a custom cart icon. Can be any valid image type."
            help="Allows for replacing the default ShopWP cart icon with a custom one."
          />
          <Toggle
            value={blockState.settings.showCounter}
            label={blockState.t.a.showCounter}
            settingsKey="showCounter"
            onChange={(c) => onChange(c, "showCounter")}
          />
          <BaseControl label="Icon Color">
            <ColorPalette
              colors={colors}
              value={blockState.settings.inlineIconColor}
              onChange={(c) => onChange(c, "inlineIconColor")}
            />
          </BaseControl>

          <BaseControl label="Counter Background Color">
            <ColorPalette
              colors={colors}
              value={blockState.settings.counterBackgroundColor}
              onChange={(c) => onChange(c, "counterBackgroundColor")}
            />
          </BaseControl>

          <BaseControl label="Counter Text Color">
            <ColorPalette
              colors={colors}
              value={blockState.settings.counterTextColor}
              onChange={(c) => onChange(c, "counterTextColor")}
            />
          </BaseControl>
        </Suspense>
      </PanelBody>
    </InspectorControls>
  )
}

export default CartIconControls
