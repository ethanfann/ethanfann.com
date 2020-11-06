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

const TypeText = (props) => {
  const { text } = props;
  const typistStrings = {
    First: "Build Responsive Web Apps",
    Second: "Integrate APIs",
    Third: "Provide Top Tier Technical Support",
    Fourth: "Love to Ride Bikes",
    Fifth: "Want To Help People Enjoy Their Technology",
  };
  if (text) {
    return (
      <StyledTypist cursor={{ show: false }}>
        <strong>{text.split(" ").slice(0, 1)}</strong>
        <br />
        {text
          .split(" ")
          .slice(1)
          .join(" ")}
      </StyledTypist>
    );
  }
  return (
    <StyledTypist cursor={{ show: false }}>
      <strong key={1}>I </strong>
      {typistStrings.First}
      <Typist.Backspace count={typistStrings.First.length} delay={1000} />
      <span key={2}>{typistStrings.Second}</span>
      <Typist.Backspace count={typistStrings.Second.length} delay={1000} />
      <span key={3}>{typistStrings.Third}</span>
      <Typist.Backspace count={typistStrings.Third.length} delay={1000} />
      <span key={4}>{typistStrings.Fourth}</span>
      <Typist.Delay ms={300} />
      <span key={5}>.</span>
      <Typist.Delay ms={600} />
      <span key={6}>.</span>
      <Typist.Delay ms={900} />
      <span key={7}>.</span>
      <Typist.Delay ms={300} />
      <Typist.Backspace count={typistStrings.Fourth.length + 5} delay={10} />
      <strong key={1}>But I Mostly </strong>
      {typistStrings.Fifth}
    </StyledTypist>
  );
};

export default TypeText;
