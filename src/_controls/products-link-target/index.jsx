import { useBlockState, useBlockDispatch } from "@shopwp/blocks"

function ProductsLinkTarget({ linkTarget, linkTo }) {
  const { SelectControl, Disabled } = wp.components
  const blockDispatch = useBlockDispatch()
  const blockState = useBlockState()

  const options = [
    {
      label: blockState.t.a.currentTab,
      value: "_self",
    },
    { label: blockState.t.a.newTab, value: "_blank" },
  ]

  function onChange(newVal) {
    blockDispatch({
      type: "UPDATE_SETTING",
      payload: { key: "linkTarget", value: newVal },
    })
  }

  return linkTo === "none" ? (
    <Disabled>
      <SelectControl
        label={blockState.t.a.linksShouldOpenIn}
        value={linkTarget}
        options={options}
        onChange={onChange}
      />
    </Disabled>
  ) : (
    <SelectControl
      label={blockState.t.a.linksShouldOpenIn}
      value={linkTarget}
      options={options}
      onChange={onChange}
    />
  )
}

export default wp.element.memo(ProductsLinkTarget)
