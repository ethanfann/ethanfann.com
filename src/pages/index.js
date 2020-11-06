import React from "react";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";
import Background from "../components/Background";
import Layout from "../components/Layout";
import TypeText from "../components/TypeText";
import Technologies from "../components/Technologies";

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

const Img = styled.img`
  max-width: 80%;
`;

const IndexPage = ({ data }) => (
  <Layout>
    <Background fluid={data.hero.edges[0].node.fluid}>
      <TypeText />
    </Background>
    <Section id="latestProject">
      <SectionTitle>Covid-19 Mini-Project</SectionTitle>
      <p>
        A simple ride activity logger built with Ruby on Rails, React +
        Typescript, and GraphQL.
      </p>
      <a href="https://github.com/ethanfann/avarts">
        <Img src="https://i.imgur.com/hWhY3Yv.gif" alt="project demo gif" />
      </a>
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
