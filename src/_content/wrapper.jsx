import BlockContent from "./index"
import {
  Products,
  Collections,
  Storefront,
  CartIcon,
  Search,
} from "@shopwp/components"

import Controls from "./controls"

function BlockWrapper({ blockProps }) {
  return (
    <>
      <Controls name={blockProps.name} />

      <BlockContent>
        {blockProps.name.includes("shopwp/collection") ? (
          <Collections />
        ) : blockProps.name.includes("shopwp/storefront") ? (
          <Storefront />
        ) : blockProps.name.includes("shopwp/cart-icon") ? (
          <CartIcon />
        ) : blockProps.name.includes("shopwp/search") ? (
          <Search />
        ) : (
          <Products />
        )}
      </BlockContent>
    </>
  )
}

export default BlockWrapper
