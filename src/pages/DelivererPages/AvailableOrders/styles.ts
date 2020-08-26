import styled, { css } from 'styled-components';

interface EmptyField {
  isEmpty: 'true' | 'false';
}

const emptyFieldStyle = {
  true: css`
    grid-template-columns: 1fr;
  `,
  false: css`
    grid-template-columns: 1fr 1fr;
  `,
};

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

export const OrderCards = styled.div<EmptyField>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) {
    ${props => emptyFieldStyle[props.isEmpty]}
  }

  @media (min-width: 1281px) {
    grid-template-columns: 1fr 1fr 1fr;

    > span {
      grid-column: 2;
    }
  }
`;
