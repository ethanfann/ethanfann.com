import React from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import Link from "./Link";
import { Strava as StravaIcon } from "styled-icons/fa-brands/Strava.cjs";
import { LinkedinIn as LinkedinIcon } from "styled-icons/fa-brands/LinkedinIn.cjs";
import { Github as GithubIcon } from "styled-icons/fa-brands/Github.cjs";

import Name from "./Name";

import media from "../utils/style";

const ButtonLink = styled.button`
  background: none !important;
  color: inherit;
  border: none;
  padding: 0 !important;
  font: inherit;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
`;

const Base = styled.div`
  padding: 0;
  margin: 0;
  max-height: 62px;
  line-height: 62px;
  width: 100vw;
  z-index: 10000;
  position: absolute;
  & ul {
    width: 100%;
    height: 62px;
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 13px;
  }
`;

const MenuBox = styled(Box)`
  ${media.xs`
    display: none;
  `}
`;

const NameBox = styled(Box)`
  ${media.xs`
    text-align:center;
  `}
`;

const MenuItem = styled(ButtonLink)`
  margin-right: 32px;
  height: 62px;
  float: right;
  position: relative;
  cursor: pointer;
  svg {
    color: white;
    width: 1.5em;
    height: 1.5m;
    padding: 1em;
  }
`;

function Header(props) {
  const { noMenu, edges } = props;
  const linkedin = edges.find(o => o.node.type === "linkedin");
  const github = edges.find(o => o.node.type === "github");
  const strava = edges.find(o => o.node.type === "strava");

  return (
    <Base>
      <Flex>
        <NameBox px={2} width={[1, 1 / 3, 2 / 6]}>
          <Name />
        </NameBox>
        {!noMenu ? (
          <MenuBox px={2} width={[0, 2 / 3, 4 / 6]}>
            <ul>
              <li>
                <MenuItem>
                  <Link aria-label={linkedin.node.type} to={linkedin.node.url}>
                    <LinkedinIcon />
                  </Link>
                </MenuItem>
              </li>
              <li>
                <MenuItem>
                  <Link aria-label={github.node.type} to={github.node.url}>
                    <GithubIcon />
                  </Link>
                </MenuItem>
              </li>
              <li>
                <MenuItem>
                  <Link aria-label={strava.node.type} to={strava.node.url}>
                    <StravaIcon />
                  </Link>
                </MenuItem>
              </li>
            </ul>
          </MenuBox>
        ) : (
          <></>
        )}
      </Flex>
    </Base>
  );
}
export default Header;
