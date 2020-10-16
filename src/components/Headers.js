import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import metadata from '../metadata.json';

import { Container } from './Layout';
import { LocationSearch } from './Locations';
import { Button, ButtonText } from './Buttons';
import logo from '../logo.svg';
import { Facebook, Instagram } from 'react-feather';

export const Nav = () => {
  return (
    <StyledNav role="navigation">
      <ButtonText onDark={true} path="/">Home</ButtonText>
      <ButtonText onDark={true} path="/blog">Blog</ButtonText>
      <ButtonText onDark={true} path="https://airtable.com/shr4mpWTPPijYTCJP">List your location</ButtonText>
      <Button path="https://www.facebook.com/groups/2607836459447926/">
      <span role="img" aria-label="Facebook"><Facebook color={'#fff'} height={16} /></span>
      </Button>
      <Button path="https://www.instagram.com/dealdelivers/">
      <span role="img" aria-label="Instagram"><Instagram color={'#fff'} height={16} /></span>
      </Button>
    </StyledNav>
  )
}

export const HeroHeader = ({ search }) => {
  return (
    <StyledHeroHeader role="banner" style={{ backgroundImage: `url(/images/Header@2x.png)` }}>
      <Container>
        {metadata.hasLogo ? <SVG src={logo} style={{ margin: '1.5rem 0', maxWidth: '100%' }} /> : <h1>{metadata.name}</h1>}
        <p>Helping the highstreet with local restaurants, shops & essential services that deliver direct to your door</p>
        <LocationSearch />
      </Container>
    </StyledHeroHeader >
  )
}

export const Header = ({children}) => {
  return(
    <StyledHeader role="banner" style={{ backgroundImage: `url(/images/Header@2x.png)` }}>
      {children}
    </StyledHeader>
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

const StyledHeader = styled.header`
  display:block;
  padding:calc(var(--spacing-xxl) * 1.25) 0;
  padding-bottom:calc(var(--spacing-lg) * 1.5);
  background-color:var(--base);
  background-size:cover;
  background-position:top;
  text-align:center;

  h1 {
    color:var(--text-high-white);
    margin:0 0 1rem 0;
  }
  p {
    color:var(--text-med-white);
    max-width:35ch;
    margin-left:auto;
    margin-right:auto;
  }

  @media(min-width:48rem) {
    padding:calc(var(--spacing-xxl) * 1) 0;
    padding-bottom:calc(var(--spacing-lg) * 1.5);
  }
`

const StyledNav = styled.nav`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-flow:row wrap;
  width:100%;  
  padding:var(--spacing-sm);
  
  a {
    width:100%;
    text-align:center;
    margin:0 0 var(--spacing-xs) 0;
  }
  a:last-of-type,
  a:nth-of-type(4) {    
    width:auto;
  }

  @media(min-width:48rem) {
    display:flex;
    justify-content:flex-end;

    a,
    a:last-of-type,
    a:nth-of-type(4) {
      
      width:auto;
      margin:0 0 0 var(--spacing-xs);
    }
  }
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
`