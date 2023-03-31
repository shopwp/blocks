import Title from "../title"
import Collection from "../collection"
import Tag from "../tag"
import Vendor from "../vendor"
import ProductType from "../product-type"
import AvailableForSale from "../available-for-sale"
import Connective from "../connective"
import { useBlockState } from "BlockState"

function FilteringControls({ settings, single = false }) {
  const blockState = useBlockState()

  return (
    <>
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
    </>
  )
}

export default wp.element.memo(FilteringControls)
