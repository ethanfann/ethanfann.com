import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styledNormalize from "styled-normalize";
import { Download as DLIcon } from "styled-icons/fa-solid/Download.cjs";

import "typeface-pacifico";
import "typeface-raleway";
import "typeface-open-sans";

import Navbar from "./Navbar";
import media from "../utils/style";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${styledNormalize}

  html {
    max-width: 100vw;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  body, input, select, textarea {
    font-size: 14pt;
    line-height: 1.5;
    font-family: 'Open Sans';
  }

  p {
    margin-bottom: 64px;
    color: #666;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway';
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: #292929;
  }

`;

const DL = styled.a`
  border: none;
  color: white;
  padding: 12px 30px;
  cursor: pointer;
  font-size: 20px;
  width: 60%;
  margin: 0 auto;
  ${media.xs`
      width:100%;
    `}
  svg {
    color: white;
    width: 1.5em;
    height: 1.5m;
    padding-right: 10px;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100vw;
  text-align: center;
  color: #fff;
  background-color: #000;
  img {
    margin-bottom: 0;
  }
`;

const Body = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 100vw;
  overflow: hidden;
  img {
    margin-bottom: 0;
  }
`;

const Layout = ({ children, noMenu }) => (
  <StaticQuery
    query={graphql`
      query layoutQuery {
        site {
          siteMetadata {
            title
          }
        }
        allSocialJson {
          edges {
            node {
              url
              type
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Body>
          <GlobalStyle />
          <Helmet title={data.site.siteMetadata.title}>
            <html lang="en" />
            <meta
              name="description"
              content="I am a IT + Software Engineer specializing in providing delightful experiences with technology."
            />
          </Helmet>
          <Navbar noMenu={noMenu} edges={data.allSocialJson.edges} />
          {children}
          <Footer>
            <DL href="/resume.pdf">
              <DLIcon />
              Resume
            </DL>
          </Footer>
        </Body>
      </>
    )}
  />
);

export default Layout;
