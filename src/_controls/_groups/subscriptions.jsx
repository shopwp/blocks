import SubscriptionsToggle from "../subscriptions-toggle"
import SubscriptionsSelectOnLoad from "../subscriptions-select-on-load"

function Subscriptions({ settings }) {
  return (
    <>
      <SubscriptionsToggle subscriptions={settings.subscriptions} />
      <SubscriptionsSelectOnLoad
        subscriptionsSelectOnLoad={settings.subscriptionsSelectOnLoad}
      />
    </>
  )
}

export default wp.element.memo(Subscriptions)
