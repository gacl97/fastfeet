import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { FiChevronLeft } from 'react-icons/fi';

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

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: flex-end;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 45px;
    width: 150px;
    background: #7d40e7;
    color: #fff;
    font-weight: 500;
    border: 0;

    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#7d40e7')};
    }

    @media (max-width: 1025px) {
      width: 100%;
      height: 35px;
    }
  }
`;

export const BackIcon = styled(FiChevronLeft)`
  height: 22px;
  width: 22px;
  margin-right: 3px;
  color: #fff;
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

  margin-top: 20px;

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
