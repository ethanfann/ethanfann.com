import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Background from "../components/Background";
import TypeText from "../components/TypeText";

const StyledBackground = styled(Background)`
  margin-top: -62px;
`;

const NotFoundPage = ({ data }) => (
  <Layout noMenu>
    <StyledBackground fluid={data.hero.edges[0].node.fluid}>
      <TypeText text="404 Not Found" />
    </StyledBackground>
  </Layout>
);

export default NotFoundPage;

export const pageQuery = graphql`
  query notFoundQuery {
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
