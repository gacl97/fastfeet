import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #f5f5f5;
  height: 100vh;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  max-width: 1400px;
  padding: 0 30px;
  margin: 0 auto;

  > span {
    grid-column-start: 2;
    color: #444444;
    font-size: 20px;
  }
`;

export const Box = styled.div`
  width: 400px;
  height: 300px;
  background: #7d40e7;
  border-radius: 4px;

  padding: 30px;

  > section {
    display: flex;
    align-items: center;
    height: 61px;
    font-size: 20px;

    > img {
      height: 80px;
      width: 80px;
      border-radius: 50%;

      margin-right: 10px;
    }
  }

  &:hover {
    box-shadow: 0 16px 16px 10px rgba(0, 0, 0, 0.24);
    transition: 0.2s;
  }
`;

export const DelivererInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 40px;

  strong {
    color: #e6af2e;
    margin-right: 8px;
  }

  > span {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    & + span {
      margin-top: 10px;
    }
  }

  > button {
    margin-top: 20px;
    height: 40px;
    border: 0;
    border-radius: 4px;

    background: #e6af2e;
    color: #fff;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#e6af2e')};
    }
  }
`;

export const Separator = styled.div`
  margin-top: 15px;
  border-bottom: 1px solid #fff;
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1400px;
  padding: 0 30px;
  margin: 34px auto;

  h1 {
    font-size: 24px;
    color: #444444;
  }

  > div {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      /* Div referente ao input de busca */
      margin-right: 10px;
    }

    > a {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 45px;
      width: 200px;
      background: #7d40e7;
      margin-right: 16px;
      text-decoration: none;
      border-radius: 4px;
      color: #ffffff;
      text-transform: uppercase;

      font-size: 14px;
      font-weight: 500;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#7D40E7')};
      }

      > svg {
        margin-right: 8px;
        color: #ffffff;
      }
    }
  }
`;
