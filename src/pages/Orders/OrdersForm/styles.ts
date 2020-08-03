import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #f5f5f5;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  max-width: 1200px;
  margin: 0 auto;

  form {
    margin-top: 30px;
    padding: 30px;
    background: #ffffff;
    border-radius: 4px;
  }
`;

export const ContentHeader = styled.header`
  flex: 1;
  margin-top: 27px;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 24px;
    color: #444444;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 45px;
      width: 112px;
      background: #cccccc;
      margin-right: 16px;
      text-decoration: none;
      border-radius: 4px;
      color: #ffffff;
      text-transform: uppercase;

      font-size: 14px;
      font-weight: 500;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#cccccc')};
      }

      svg {
        color: #ffffff;
      }
    }

    button {
      width: 112px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;

      svg {
        margin-right: 3px;
      }
    }
  }
`;

export const SelectOptions = styled.div`
  display: flex;

  > div:first-child {
    margin-right: 80px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: #444444;
    font-size: 14px;
    margin-bottom: 10px;
  }

  > div {
    width: 530px;
  }
`;

export const InputContainer = styled.div`
  margin-top: 16px;
  h1 {
    color: #444444;
    font-size: 14px;
    margin-bottom: 10px;
  }
`;
