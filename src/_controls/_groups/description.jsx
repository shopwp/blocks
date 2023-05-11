const DescriptionSize = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlDescriptionSize-admin' */ "../description-size"
  )
)

const DescriptionColor = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlDescriptionColor-admin' */ "../description-color"
  )
)

const DescriptionLength = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlDescriptionLength-admin' */ "../description-length"
  )
)

function DescriptionControls({ settings }) {
  const { Suspense } = wp.element
  const { Spinner } = wp.components
  return (
    <Suspense fallback={<Spinner />}>
      <DescriptionSize size={settings.descriptionSize} />
      <DescriptionColor color={settings.descriptionColor} />
      <DescriptionLength length={settings.length} />
    </Suspense>
  )
}

export default wp.element.memo(DescriptionControls)
