import axios from 'axios';
import Recepie from 'components/molecules/Recepie/Recepie';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const API_TOKEN = `98704fa53da1938fa99f9360bc3540`;

const Wrapper = styled.div`
  background-color: green;
`;

const Recepies = () => {
  const [recepies, setRecepies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .post(
        ' https://graphql.datocms.com/',
        {
          query: `{
            allRecepies{
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
        console.log(data.allRecepies);
        setRecepies(data.allRecepies);
        console.log(recepies);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Wrapper>
      id:{id}
      {recepies.map((recepie) => {
        <Recepie recepie={recepie} />;
      })}
    </Wrapper>
  );
};

export default Recepies;
