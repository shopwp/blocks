import BlockContent from "./index"
import {
  Products,
  Collections,
  Storefront,
  CartIcon,
  Search,
} from "@shopwp/components"

import Controls from "./controls"

function BlockWrapper({ blockName }) {
  return (
    <>
      <Controls name={blockName} />

      <BlockContent>
        {blockName.includes("shopwp/collection") ? (
          <Collections />
        ) : blockName.includes("shopwp/storefront") ? (
          <Storefront />
        ) : blockName.includes("shopwp/cart-icon") ? (
          <CartIcon />
        ) : blockName.includes("shopwp/search") ? (
          <Search />
        ) : (
          <Products />
        )}
      </BlockContent>
    </>
  )
}

export default BlockWrapper
