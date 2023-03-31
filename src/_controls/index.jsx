const { InspectorControls } = wp.blockEditor;

function BlockControls({ children }) {
  return <InspectorControls>{children}</InspectorControls>;
}

export default BlockControls;
