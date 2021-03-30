import React from "react";
import ReactCompareImage from "react-compare-image";

function Compare(props) {
  const { edges } = props;
  return (
    <div style={{ maxWidth: "90vh", margin: "auto", padding: "20px" }}>
      <ReactCompareImage
        leftImage={edges[0].node.fluid.src}
        leftImageAlt="Website with light mode"
        rightImage={edges[1].node.fluid.src}
        rightImageAlt="Website with dark mode"
      />
    </div>
  );
}

export default Compare;
