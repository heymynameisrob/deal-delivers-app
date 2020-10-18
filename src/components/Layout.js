import React from 'react';
import styled from 'styled-components';

export const Grid = ({ cols, children, ...rest }) => {
  return (
    <StyledGrid cols={cols}>
      {children.map((child, i) => <StyledGridCell key={i}>{child}</StyledGridCell>)}
    </StyledGrid>
  )
}

export const Container = ({ children, ...rest }) => {
  return <section className="l-container"  {...rest}>{children}</section>
}

export const PostContainer = ({ children, ...rest }) => {
  return <StyledPostContainer  {...rest}>{children}</StyledPostContainer>
}

const StyledGrid = styled.ul`
  display:block;
  --grid-tc:${props => props.cols || 3};
  grid-template-columns:repeat(var(--grid-tc), 1fr);
  grid-column-gap:var(--spacing-sm);

  @media(min-width:48rem) {
    display:grid;
  }
`
const StyledGridCell = styled.li`
  display:block;
  list-style-type:none;
  margin-bottom:var(--spacing-sm);
`

const StyledPostContainer = styled.section`
  display:block;
  max-width:56ch;
  margin:0 auto;
  padding-left:1.5rem;
  padding-right:1.5rem;
  padding-top:var(--spacing-lg);
`