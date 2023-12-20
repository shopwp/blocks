import { Textarea } from "@shopwp/wp-ui"
import isBase64 from "is-base64"

function ProductTemplateControls({ settings, dispatch, translations }) {
  return (
    <>
      <Textarea
        name="htmlTemplateData"
        label={translations.a.template}
        help={translations.a.templateHelp}
        defaultState={
          isBase64(settings.htmlTemplateData)
            ? decodeURI(atob(settings.htmlTemplateData))
            : settings.htmlTemplateData
        }
        rows={15}
        isHtml={true}
        settings={settings}
        dispatch={dispatch}
      />
      <a href="https://docs.wpshop.io/guides/html-templates" target="_blank">
        Learn about using HTML Templates in ShopWP
      </a>
    </>
  )
}

export default ProductTemplateControls
