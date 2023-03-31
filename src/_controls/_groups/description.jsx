import DescriptionSize from "../description-size"
import DescriptionColor from "../description-color"
import DescriptionLength from "../description-length"

function DescriptionControls({ settings }) {
  return (
    <>
      <DescriptionSize size={settings.descriptionSize} />
      <DescriptionColor color={settings.descriptionColor} />
      <DescriptionLength length={settings.length} />
    </>
  )
}

export default wp.element.memo(DescriptionControls)
