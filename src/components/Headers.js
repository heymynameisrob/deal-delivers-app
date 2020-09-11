import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import metadata from '../metadata.json';

import { Container } from './Layout';
import { LocationSearch } from './Locations';
import { Button } from './Buttons';
import logo from '../logo.svg';

<<<<<<< HEAD
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
=======
const PayPalDonate = () => (
  <StyledPayPalButton>
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="7J3Z7UPVWH9E6" />
      <input type="submit" name="submit" value="Donate" alt="Donate with PayPal button" />
      <img alt="" border="0" src="https://www.paypal.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
    </form>
  </StyledPayPalButton>
)

export const Nav = () => {
  return (
    <StyledNav role="navigation">
      <Button path={`mailto:${metadata.email}?subject=List Me`}>
        📍 List your location
      </Button>
      <Button path="https://www.facebook.com/groups/2607836459447926/">
        🙌 Follow on Facebook
      </Button>
      <PayPalDonate />
>>>>>>> 6a9fe1f469c22bc7d5cb2ae933d39f654869cec4
    </StyledNav>
  )
}

export const HeroHeader = ({ search }) => {
  return (
    <StyledHeroHeader role="banner" style={{ backgroundImage: `url(/images/Header@2x.png)` }}>
      <Container>
        {metadata.hasLogo ? <SVG src={logo} style={{ margin: '1.5rem 0', maxWidth: '100%' }} /> : <h1>{metadata.name}</h1>}
<<<<<<< HEAD
        <p>Helping the high street with local restaurants, shops &amp; essential services that deliver direct to your door</p>
=======
        <p>Helping the highstreet with local restaurants, shops & essential services that deliver direct to your door</p>
>>>>>>> 6a9fe1f469c22bc7d5cb2ae933d39f654869cec4
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
<<<<<<< HEAD
=======
`

const StyledPayPalButton = styled.div`
  input[type="submit"] {
    display:block;
    width:100%;
    padding:0.85rem var(--spacing-xs);
    font-size:0.85rem;
    text-decoration:none;
    background-color:var(--primary);
    color:var(--surface);
    border-radius:0.25rem; 
    font-weight:700; 
    border:none;
    text-align:center;  
    cursor:pointer;
    transition:all .2s ease;    

    @media(min-width:48rem) {
      display:inline-block;
      width:auto;
      margin-left:1rem;
    }

    &:hover {
      background-color:#fff;
      color:var(--text-high);
      transition:all .2s ease;
    }
  }
>>>>>>> 6a9fe1f469c22bc7d5cb2ae933d39f654869cec4
`