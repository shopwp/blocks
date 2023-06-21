import { Color, FontSize } from "@shopwp/wp-ui"

import { useBlockState, useBlockDispatch } from "../../_state/hooks"

function TitleControls({ settings }) {
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  return (
    <>
      <FontSize
        label="Product title font size"
        name="titleTypeFontSize"
        translations={blockState.t}
        settings={blockState.settings}
        dispatch={blockDispatch}
      />

      <Color
        name="titleColor"
        settings={settings}
        label={blockState.t.l.titleColor}
        dispatch={blockDispatch}
      />
    </>
  )
}

export default TitleControls
