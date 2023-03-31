import TextControlDebounced from "../_common/text-control-debounced"
import { useBlockState } from "../../_state/hooks"

function AddToCartButtonText({ text }) {
  const blockState = useBlockState()

  return (
    <TextControlDebounced
      settingName="addToCartButtonText"
      label={blockState.t.l.addCartText}
      state={text}
    />
  )
}

export default wp.element.memo(AddToCartButtonText)
