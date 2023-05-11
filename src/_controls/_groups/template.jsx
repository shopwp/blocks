const HtmlTemplate = wp.element.lazy(() =>
  import(/* webpackChunkName: 'ControlHtmlTemplate-admin' */ "../html-template")
)

function TemplateControls({ settings }) {
  const { Suspense } = wp.element
  const { Spinner } = wp.components

  return (
    <Suspense fallback={<Spinner />}>
      <HtmlTemplate settings={settings} />
    </Suspense>
  )
}

export default wp.element.memo(TemplateControls)
