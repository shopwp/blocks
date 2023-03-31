import { useBlockState, useBlockDispatch } from "BlockState"

function Connective({ state }) {
  const { RadioControl } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "connective", value: newVal },
    })
  }

  return (
    <RadioControl
      label={blockState.t.a.matchCriteria}
      help={blockState.t.a.matchCriteriaHelp}
      selected={state}
      options={[
        {
          label: blockState.t.a.and,
          value: "AND",
        },
        {
          label: blockState.t.a.or,
          value: "OR",
        },
      ]}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(Connective)
