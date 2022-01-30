import TitleWrapper from 'components/atoms/TitleWrapper/TitleWrapper';
import { StyledLink } from 'components/organisms/Navigation/Navigation.styled';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  width: 700px;
  border-radius: 12px;
`;
const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  p {
    letter-spacing: 1.1px;
    width: 700px;
  }
  img {
    max-width: 250px;
  }
  ul {
    width: 350px;
  }
`;
const Button = styled.button`
  text-align: center;
  width: 200px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 20px;
  border: none;
  align-self: flex-end;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.l};
`;
const Link = styled(StyledLink)`
  color: ${({ theme }) => theme.colors.darkPurple};
  margin: 0;
`;

const Recepie = ({
  recepie: { id, title, category, description, ingredients, image },
}) => {
  return (
    <Wrapper id={id}>
      <TitleWrapper>
        {title}
        <p>{category}</p>
      </TitleWrapper>
      <ContentWrapper>
        <ul>
          {Object.keys(ingredients).map((keyName, i) => (
            <li key={i}>
              {keyName}: {ingredients[keyName]}
            </li>
          ))}
        </ul>
        <img src={image.url} alt="image" />
        <p>{description}</p>
      </ContentWrapper>
      <Button>
        <Link to="/">Sprawdź</Link>
      </Button>
    </Wrapper>
  );
};

export default Recepie;
