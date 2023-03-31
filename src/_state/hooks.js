import { BlockStateContext, BlockDispatchContext } from "./context"

function useBlockState() {
  const context = wp.element.useContext(BlockStateContext)

  if (!context) {
    throw new Error("useBlockState must be used within the BlockProvider")
  }

  return context
}

function useBlockDispatch() {
  const context = wp.element.useContext(BlockDispatchContext)

  if (!context) {
    throw new Error("useBlockDispatch must be used within the BlockProvider")
  }

  return context
}

export { useBlockState, useBlockDispatch }
