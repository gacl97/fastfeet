import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #f5f5f5;
  height: 100vh;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  max-width: 1366px;
  padding: 0 30px;
  margin: 0 auto;
  margin-top: 40px;
`;

export const Box = styled.div`
  height: 300px;
  background: #7d40e7;
  border-radius: 4px;

  &:hover {
    box-shadow: 0 16px 16px 10px rgba(0, 0, 0, 0.24);
    transition: 0.2s;
  }

  header {
    padding: 30px;

    > span {
      display: flex;
      align-items: center;

      h1 {
        font-size: 20px;
        color: #fff;
      }

      > svg {
        height: 25px;
        width: 25px;
        margin-right: 10px;
        color: #e6af2e;
      }
    }
  }
`;

export const ContentHeader = styled.div`
  max-width: 1366px;
  padding: 0 30px;
  margin: 0 auto;

  margin-top: 50px;

  display: flex;
  justify-content: flex-end;

  button {
    height: 45px;
    width: 150px;
    background: #7d40e7;
    color: #fff;
    font-weight: 500;
    border: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      height: 22px;
      width: 22px;

      margin-right: 3px;
      color: #fff;
      font-weight: 500;
    }
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#7d40e7')};
    }
  }
`;

export const BoxContent = styled.div`
  padding: 0 30px;

  h1 {
    font-size: 20px;
    color: #fff;

    display: flex;
    align-items: center;

    margin-bottom: 5px;

    > svg {
      height: 20px;
      width: 20px;
      margin-right: 10px;
      color: #e6af2e;
    }
  }

  span + h1 {
    margin-top: 10px;
  }

  span {
    margin-left: 30px;
  }
`;

export const DateContent = styled.div`
  margin-top: 40px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DateView = styled.div`
  h1 {
    font-size: 20px;
    color: #fff;

    display: flex;
    align-items: center;

    margin-bottom: 6px;

    > svg {
      height: 20px;
      width: 20px;
      margin-right: 10px;
      color: #e6af2e;
    }
  }

  span {
    margin-left: 30px;
  }
`;

export const ContentFooter = styled.div`
  max-width: 1366px;
  padding: 0 30px;
  margin: 0 auto;

  margin-top: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    display: flex;
    height: 55px;
    width: 100%;
    border: 0;
    background: #0000001a;

    display: flex;
    justify-content: center;
    align-items: center;

    & + button {
      margin-left: 50px;
    }

    > svg {
      margin-right: 5px;
      height: 20px;
      width: 20px;

      transition: background-color 0.2s;
    }
    &:hover {
      background: ${shade(0.2, '#0000001a')};
    }
  }
`;
