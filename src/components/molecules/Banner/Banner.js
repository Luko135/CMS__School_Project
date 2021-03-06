import React from 'react';
import styled from 'styled-components';
import banner from 'assets/images/indeks2.jpg';
const Wrapper = styled.div`
  width: 100%;
  grid-row: 1/2;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-fit: cover;
`;

const Banner = () => {
  return (
    <Wrapper>
      <Image src={banner} alt="banner" />
    </Wrapper>
  );
};

export default Banner;
