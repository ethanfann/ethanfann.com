import React from "react";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";
import Background from "../components/Background";
import Layout from "../components/Layout";
import TypeText from "../components/TypeText";
import Technologies from "../components/Technologies";
import ReactCompareImage from "react-compare-image";
import leftImage from "../images/light.png";
import rightImage from "../images/dark.png";

import media from "../utils/style";

const Section = styled.div`
  text-align: center;
  padding-top: 45px;
  padding-bottom: 40px;
  ${(props) =>
    props.dark &&
    css`
      background: #292929;
      h2 {
        color: #fff;
      }
      h3 {
        color: #fff;
      }
      div {
        color: #979797;
      }
    `}
`;

const SectionTitle = styled.h2`
  font-size: 2em;
  margin: 0.67em 0;
  ${media.xs`
    font-size:1.5em;
  `}
`;

const IndexPage = ({ data }) => (
  <Layout>
    <Background fluid={data.hero.edges[0].node.fluid}>
      <TypeText />
    </Background>
    <Section id="latestProject">
      <SectionTitle>
        <a href="https://github.com/ethanfann/avarts" target="_blank">
          latest Project
        </a>
      </SectionTitle>
      <p>
        A personal ride activity logger built with Ruby on Rails, React +
        Typescript, and GraphQL. Dark mode included.
      </p>
      <div style={{ maxWidth: "60%", margin: "auto" }}>
        <ReactCompareImage leftImage={leftImage} rightImage={rightImage} />
      </div>
    </Section>
    <Section id="technologies">
      <SectionTitle>Favorite Tech I've Worked With</SectionTitle>
      <Technologies edges={data.allLogos.edges} />
    </Section>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query indexQuery {
    allLogos: allImageSharp(
      filter: { original: { src: { regex: "/logo/" } } }
      sort: { fields: original___src }
    ) {
      edges {
        node {
          id
          fixed(height: 80, grayscale: true) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
    hero: allImageSharp(
      filter: { original: { src: { regex: "/background2/" } } }
    ) {
      edges {
        node {
          id
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
