import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import metadata from '../metadata.json';

import { Container } from './Layout';
import { LocationSearch } from './Locations';
import logo from '../logo.svg';
import icon from '../logo-icon.svg';
import { Facebook, Instagram, Menu } from 'react-feather';


export const Nav = () => {
  return(
    <StyledNav>              
      <NavLinks />
    </StyledNav>
  )
}

const NavLinks = () => {
  const [navOpen,setNavOpen] = useState(false);
  return(
    <>
      <Menu color={"#fff"} className="menu-toggle" onClick={() => setNavOpen(!navOpen)}/>
      <StyledNavLinks isOpen={navOpen}>
        <Link to={"/"}>Home</Link>
        <Link to={"/blog"}>Blog</Link>
        <a href="https://airtable.com/shr4mpWTPPijYTCJP">List Location</a>
        <a href="https://www.facebook.com/groups/2607836459447926/"><Facebook color={"#fff"} height={16} /></a>
        <a href="https://www.instagram.com/dealdelivers/"><Instagram color={"#fff"} height={16} /></a>
      </StyledNavLinks>
    </>
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
  padding:var(--spacing-md) 0;
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
  padding:var(--spacing-xl) 0;
  padding-bottom:calc(var(--spacing-xl) * 1.25);
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
    padding-bottom:calc(var(--spacing-xl) * 1.5);
  }
`

const StyledNav = styled.nav`   
  top:0;
  left:0;
  width:100%;
  display:flex;  
  justify-content:center;
  align-items:center;
  flex-flow:column nowrap;  
  width:100%;  
  background-color:var(--base);
  padding:var(--spacing-sm);

  .menu-toggle {
    display:block;
    margin-left:auto;
  }

  @media(min-width:48rem) {  
    position:absolute;  
    display:flex;    
    justify-content:flex-end;
    flex-flow:wrap;  
    background-color:transparent;

    .menu-toggle {
      display:none;
    }
  }
`

const StyledNavLinks = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-flow:column nowrap;
  max-height:${props => props.isOpen ? '100vh' : '0'};
  opacity:${props => props.isOpen ? '1' : '0'};
  overflow:${props => props.isOpen ? 'none' : 'hidden'};
  transition:all .2s ease;

  @media(min-width:48rem) {
    display:flex;
    justify-content:flex-end;
    flex-flow:wrap;
    max-height:none;
    opacity:1;    
  }



  a {
    padding:1rem 0;
    color:white;

    @media(min-width:48rem) {
      padding:0 1rem 0 0;
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