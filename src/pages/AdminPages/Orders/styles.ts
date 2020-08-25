import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';
import { shade } from 'polished';

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

export const ContentHeader = styled.header`
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 26px;
    color: #444444;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin: 15px 0;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    > a {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 45px;
      margin-top: 15px;
      width: 100%;
      border-radius: 4px;

      background: #7d40e7;
      color: #ffffff;
      text-decoration: none;

      font-size: 16px;

      > svg {
        margin-right: 8px;
        height: 25px;
        width: 25px;
      }

      @media (min-width: 768px) {
        margin-top: 0;
        width: 250px;
      }

      font-weight: 500;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#7D40E7')};
      }
    }
  }
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

export const PlusIcon = styled(FiPlus)`
  color: #ffffff;
  height: 22px;
  width: 22px;
`;
