import React from "react";
import ReactCompareImage from "react-compare-image";

function Compare(props) {
  const { edges } = props;
  return (
    <div style={{ maxWidth: "80%", margin: "auto" }}>
      <ReactCompareImage
        leftImage={edges[0].node.fluid.src}
        rightImage={edges[1].node.fluid.src}
      />
    </div>
  );
}

export default Compare;
