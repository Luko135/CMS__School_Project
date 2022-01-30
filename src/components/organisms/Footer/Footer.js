import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSize.l};
  height: 60px;
  display: grid;
  place-items: center;
`;
const Footer = () => {
  return <Wrapper>Website made by: Mateusz Lukoszek & Julia Hoinkis</Wrapper>;
};

export default Footer;
