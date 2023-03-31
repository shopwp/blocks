import TitleSize from "../title-size"
import TitleColor from "../title-color"

function TitleControls({ settings }) {
  return (
    <>
      <TitleSize fontSize={settings.titleSize} />
      <TitleColor titleColor={settings.titleColor} />
    </>
  )
}

export default wp.element.memo(TitleControls)
