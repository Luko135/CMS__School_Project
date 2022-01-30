import styled from 'styled-components';
const TitleWrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSize.xl};

  p {
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.grey};
    margin: 0;
  }
`;

export default TitleWrapper;
