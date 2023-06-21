import BlockProvider from "../_state/provider"
import ControlsWrapper from "../_controls/wrapper"
import BlockContent from "./index"
import {
  Products,
  Collections,
  Storefront,
  CartIcon,
  Search,
} from "@shopwp/components"

function BlockWrapper({ blockProps, Controls }) {
  return (
    <BlockProvider blockProps={blockProps}>
      <ControlsWrapper>
        <Controls />
      </ControlsWrapper>

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
    </BlockProvider>
  )
}

export default BlockWrapper
