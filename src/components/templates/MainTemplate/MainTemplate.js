import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import styled from 'styled-components';
import Banner from 'components/molecules/Banner/Banner';
import Footer from 'components/organisms/Footer/Footer';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: 200px 1fr;
  grid-template-columns: 150px 1fr;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

function MainTemplate({ children }) {
  return (
    <Wrapper>
      <Banner />
      <Navigation />
      {children}
      <Footer />
    </Wrapper>
  );
}

export default MainTemplate;
