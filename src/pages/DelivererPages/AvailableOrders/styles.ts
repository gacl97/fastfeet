import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  padding: 20px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1380px;
`;

export const OrderCards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1281px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
