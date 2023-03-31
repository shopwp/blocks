import HtmlTemplate from "../html-template"

function TemplateControls({ settings }) {
  return (
    <>
      <HtmlTemplate settings={settings} />
    </>
  )
}

export default wp.element.memo(TemplateControls)
