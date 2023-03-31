import BlockReducer from "./reducer"
import BlockInitialState from "./initial-state"
import { BlockStateContext, BlockDispatchContext } from "./context"

function BlockProvider(props) {
  const [state, dispatch] = wp.element.useReducer(
    BlockReducer,
    BlockInitialState(props)
  )

  return (
    <BlockStateContext.Provider value={state}>
      <BlockDispatchContext.Provider value={dispatch}>
        {props.children}
      </BlockDispatchContext.Provider>
    </BlockStateContext.Provider>
  )
}

export default BlockProvider
