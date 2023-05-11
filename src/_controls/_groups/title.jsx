const TitleSize = wp.element.lazy(() =>
  import(/* webpackChunkName: 'ControlTitleSize-admin' */ "../title-size")
)

const TitleColor = wp.element.lazy(() =>
  import(/* webpackChunkName: 'ControlTitleColor-admin' */ "../title-color")
)

function TitleControls({ settings }) {
  const { Suspense } = wp.element
  const { Spinner } = wp.components

  return (
    <Suspense fallback={<Spinner />}>
      <TitleSize fontSize={settings.titleSize} />
      <TitleColor titleColor={settings.titleColor} />
    </Suspense>
  )
}

export default wp.element.memo(TitleControls)
