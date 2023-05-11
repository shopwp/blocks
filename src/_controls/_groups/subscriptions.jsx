const SubscriptionsToggle = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlSubscriptionsToggle-admin' */ "../subscriptions-toggle"
  )
)

const SubscriptionsSelectOnLoad = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlSubscriptionsSelectOnLoad-admin' */ "../subscriptions-select-on-load"
  )
)

function Subscriptions({ settings }) {
  const { Suspense } = wp.element
  const { Spinner } = wp.components

  return (
    <Suspense fallback={<Spinner />}>
      <SubscriptionsToggle subscriptions={settings.subscriptions} />
      <SubscriptionsSelectOnLoad
        subscriptionsSelectOnLoad={settings.subscriptionsSelectOnLoad}
      />
    </Suspense>
  )
}

export default wp.element.memo(Subscriptions)
