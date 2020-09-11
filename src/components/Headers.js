import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import metadata from '../metadata.json';

import { Container } from './Layout';
import { LocationSearch } from './Locations';
import { Button } from './Buttons';
import logo from '../logo.svg';

export const Nav = () => {
  return (
    <StyledNav role="navigation">
      <Button path="https://airtable.com/shr4mpWTPPijYTCJP">
      <span role="img" aria-label="List">📍</span>&nbsp;&nbsp;List your location
      </Button>
      <Button path="https://www.facebook.com/groups/2607836459447926/">
      <span role="img" aria-label="Email">🙌</span>&nbsp;&nbsp;Follow on Facebook
      </Button>
      <Button path="https://www.instagram.com/dealdelivers/">
      <span role="img" aria-label="Facebook">🙌</span>&nbsp;&nbsp;Follow on Instagram
      </Button>
    </StyledNav>
  )
}

export const HeroHeader = ({ search }) => {
  return (
    <StyledHeroHeader role="banner" style={{ backgroundImage: `url(/images/Header@2x.png)` }}>
      <Container>
        {metadata.hasLogo ? <SVG src={logo} style={{ margin: '1.5rem 0', maxWidth: '100%' }} /> : <h1>{metadata.name}</h1>}
        <p>Helping the high street with local restaurants, shops &amp; essential services that deliver direct to your door</p>
        <LocationSearch />
      </Container>
    </StyledHeroHeader >
  )
}

const StyledHeroHeader = styled.header`
  display:block;
  padding:calc(var(--spacing-xxl) * 1.25) 0;
  padding-bottom:calc(var(--spacing-lg) * 2.5);
  background-color:var(--base);
  background-size:cover;
  background-position:top;

  h1 {
    color:var(--text-high-white);
    margin:0 0 1rem 0;
  }
  p {
    color:var(--text-med-white);
    max-width:35ch;
  }

  @media(min-width:48rem) {
    padding:calc(var(--spacing-xxl) * 1) 0;
    padding-bottom:calc(var(--spacing-xl) * 1.5);
  }
`

const StyledNav = styled.nav`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  display:block;
  justify-content:space-between;
  align-items:center;
  flex-flow:row nowrap;
  width:100%;  
  padding:var(--spacing-sm);
  
  a {
    width:100%;
    margin:0 0 var(--spacing-xs) 0;
  }

  @media(min-width:48rem) {
    display:flex;
    justify-content:flex-end;

    a {
      width:auto;
      margin:0 0 0 var(--spacing-xs);
    }
  }
`