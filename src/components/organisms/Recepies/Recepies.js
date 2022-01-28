import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: green;
`;

const Recepies = () => {
  const { id } = useParams();
  return <Wrapper>id:{id}</Wrapper>;
};

export default Recepies;
