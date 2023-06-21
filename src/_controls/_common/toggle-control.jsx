import { useBlockDispatch } from "@shopwp/blocks"

function Toggle({ value, label, settingsKey, help = false }) {
  const { ToggleControl } = wp.components
  const blockDispatch = useBlockDispatch()

  function onChange(v) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: settingsKey, value: v },
    })
  }

  return (
    <ToggleControl
      label={label}
      checked={value}
      onChange={onChange}
      help={help}
    />
  )
}

export default Toggle
