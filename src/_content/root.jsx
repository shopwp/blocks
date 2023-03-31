import { RootElement } from "Components"

function BlockRoot({ attributes }) {
  return (
    <RootElement settings={attributes.settingsId} id={attributes.clientId} />
  )
}

export default BlockRoot
