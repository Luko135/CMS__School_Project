import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recepie from 'components/molecules/Recepie/Recepie';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const API_TOKEN = `98704fa53da1938fa99f9360bc3540`;

const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  overflow-y: auto;
`;
const Title = styled.h1`
  margin: 0;
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const Recepies = () => {
  const { id } = useParams();
  const [recepies, setRecepies] = useState([]);
  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `{
            allRecepies(filter: {
                     category: {
                        eq: ${id}
                       },
                      }){
                   id
                       title
                         category
                         ingredients
                         description
                        }
                  }`,
        },
        {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setRecepies(data.allRecepies);
        console.log(recepies);
      })
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <Wrapper>
      <Title>{id}</Title>
      {recepies.map((recepie) => (
        <Recepie recepie={recepie} />
      ))}
    </Wrapper>
  );
};

export default Recepies;
