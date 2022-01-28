import React from 'react';
import { Logo, StyledLink, Wrapper } from './Navigation.styled';

function Navigation() {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/sniadania">śniadania</StyledLink>
      <StyledLink to="/obiad">obiady</StyledLink>
      <StyledLink to="/kolacja">kolacje</StyledLink>
    </Wrapper>
  );
}

export default Navigation;
