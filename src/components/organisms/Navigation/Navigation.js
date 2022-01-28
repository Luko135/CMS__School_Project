import React from 'react';
import { Logo, StyledLink, Wrapper } from './Navigation.styled';

function Navigation() {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Cook
          <br />
          Book
        </h1>
      </Logo>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/sniadania">śniadania</StyledLink>
      <StyledLink to="/obiady">obiady</StyledLink>
      <StyledLink to="/kolacje">kolacje</StyledLink>
      <StyledLink to="/desery">desery</StyledLink>
      <StyledLink to="/przekaski">prząkaski</StyledLink>
    </Wrapper>
  );
}

export default Navigation;
