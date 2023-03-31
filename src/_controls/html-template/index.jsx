import TextAreaDebounced from "../_common/text-area-debounced"
import isBase64 from "is-base64"
import { useBlockState } from "BlockState"

function HtmlTemplate({ settings }) {
  const blockState = useBlockState()

  return (
    <>
      <TextAreaDebounced
        settingName="htmlTemplateData"
        label={blockState.t.a.template}
        help={blockState.t.a.templateHelp}
        defaultState={
          isBase64(settings.htmlTemplateData)
            ? atob(settings.htmlTemplateData)
            : settings.htmlTemplateData
        }
        rows={15}
        isHtml={true}
      />
      <a href="https://docs.wpshop.io/guides/html-templates" target="_blank">
        Learn more about using HTML templates
      </a>
    </>
  )
}

export default wp.element.memo(HtmlTemplate)
