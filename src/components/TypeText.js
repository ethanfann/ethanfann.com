import React from "react";
import styled from "styled-components";
import Typist from "react-typist";

import media from "../utils/style";

const StyledTypist = styled(Typist)`
  color: #fff;
  letter-spacing: 17px;
  margin: 0 auto;
  font-size: 72px;
  line-height: 80px;
  font-weight: 100;
  text-transform: uppercase;
  font-family: "Raleway";
  ${media.xs`
    font-size:38px;
    line-height: 44px;
    letter-spacing: 8px;
  `}
`;

const TypeText = () => {
  const typistStrings = {
    First: "Welcome",
  };
  return (
    <StyledTypist cursor={{ show: false }}>{typistStrings.First}</StyledTypist>
  );
};

export default TypeText;
