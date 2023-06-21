import { RootElement } from "@shopwp/components"

function BlockRoot({ blockProps }) {
  return (
    <RootElement
      settings={blockProps.attributes.settingsId}
      id={blockProps.attributes.clientId}
      type={blockProps.attributes.blockType}
      skeletonType={blockProps.attributes.name}
    />
  )
}

export default BlockRoot
