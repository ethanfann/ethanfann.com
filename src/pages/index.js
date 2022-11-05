import React from "react";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";
import Background from "../components/Background";
import Layout from "../components/Layout";
import TypeText from "../components/TypeText";
import Technologies from "../components/Technologies";
import Compare from "../components/Compare";

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
  max-width: 60%;
  ${media.xs`
    max-width: 80%;
  `}
`;

const IndexPage = ({ data }) => (
  <Layout>
    <Background fluid={data.hero.edges[0].node.fluid}>
      <TypeText />
    </Background>
    <Section>
      <SectionTitle>
        <a href="https://tangey.app" target="_blank" rel="noopener noreferrer">
          Tangey
        </a>
      </SectionTitle>
      <p>
        iOS application that provides home screen widgets for your latest Strava
        activity.
      </p>
      <Img
        size=""
        src={data.tangey.edges[0].node.fluid.src}
        alt="tangey image"
      />
    </Section>
    <Section>
      <SectionTitle>
        <a
          href="https://github.com/ethanfann/slackmojis-dl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Slackmojis Downloader CLI
        </a>
      </SectionTitle>
      <p>
        CLI application built with Ink.js that downloads emojis from{" "}
        <a href="https://slackmojis.com" target="_blank" rel="noreferrer">
          slackmojis.com
        </a>
        , one of the largest community-sourced repositories.{" "}
      </p>
      <Img
        size=""
        src="https://raw.githubusercontent.com/ethanfann/slackmojis-dl/main/media/demo.jpg"
        alt="slackmojis downloader gif"
      />
    </Section>
    <Section id="latestProject">
      <SectionTitle>
        <a
          href="https://github.com/ethanfann/avarts"
          target="_blank"
          rel="noreferrer"
        >
          Personal Cycling Activity Logger
        </a>
      </SectionTitle>
      <p>
        A personal cycling activity logger built with Ruby on Rails, React +
        Typescript, and GraphQL. Dark mode included.
      </p>
      <Compare edges={data.comparison.edges} />
    </Section>
    <Section id="technologies">
      <SectionTitle>Favorite Tech</SectionTitle>
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
    comparison: allImageSharp(
      filter: { original: { src: { regex: "/comparison/" } } }
    ) {
      edges {
        node {
          id
          fluid(maxWidth: 2560, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    tangey: allImageSharp(
      filter: { original: { src: { regex: "/tangey/" } } }
    ) {
      edges {
        node {
          id
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  }
`;
