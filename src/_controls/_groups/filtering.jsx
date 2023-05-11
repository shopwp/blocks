const Title = wp.element.lazy(() =>
  import(/* webpackChunkName: 'ControlTitle-admin' */ "../title")
)

const Collection = wp.element.lazy(() =>
  import(/* webpackChunkName: 'ControlCollection-admin' */ "../collection")
)

const Tag = wp.element.lazy(() =>
  import(/* webpackChunkName: 'ControlTag-admin' */ "../tag")
)

const Vendor = wp.element.lazy(() =>
  import(/* webpackChunkName: 'ControlVendor-admin' */ "../vendor")
)

const ProductType = wp.element.lazy(() =>
  import(/* webpackChunkName: 'ControlProductType-admin' */ "../product-type")
)

const AvailableForSale = wp.element.lazy(() =>
  import(
    /* webpackChunkName: 'ControlAvailableForSale-admin' */ "../available-for-sale"
  )
)

const Connective = wp.element.lazy(() =>
  import(/* webpackChunkName: 'ControlConnective-admin' */ "../connective")
)

import { useBlockState } from "@shopwp/blocks"

function FilteringControls({ settings, single = false }) {
  const blockState = useBlockState()
  const { Suspense } = wp.element
  const { Spinner } = wp.components

  return (
    <Suspense fallback={<Spinner />}>
      <Title
        title={settings.title}
        isLoading={settings.isLoading}
        collection={settings.collection}
      />
      {!single && <Collection state={settings.collection} />}
      {!single && (
        <Tag
          translations={blockState.t}
          state={settings.tag}
          collection={settings.collection}
        />
      )}
      {!single && (
        <Vendor
          translations={blockState.t}
          state={settings.vendor}
          collection={settings.collection}
        />
      )}
      {!single && (
        <ProductType
          translations={blockState.t}
          state={settings.productType}
          collection={settings.collection}
        />
      )}
      {!single && <AvailableForSale state={settings.availableForSale} />}
      {!single && <Connective state={settings.connective} />}
    </Suspense>
  )
}

export default wp.element.memo(FilteringControls)
