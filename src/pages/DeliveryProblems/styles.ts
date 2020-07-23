import styled from 'styled-components';

export const Container = styled.div`
  background: #f5f5f5;
  padding: 34px 0;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;

  > h1 {
    color: #444444;
    font-size: 24px;
    text-align: start;
    font-weight: 500;
    margin-bottom: 34px;
  }

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #444444;
    font-size: 20px;
  }

  table {
    width: 100%;
    border-spacing: 0 10px;

    th {
      text-align: start;
      color: #444444;
      font-weight: normal;
      padding: 0 32px;
      font-size: 18px;
      line-height: 24px;
    }

    td {
      padding: 0 32px;
      border: 0;
      font-size: 16px;
      font-weight: normal;
      background: #ffffff;
      height: 57px;
      color: #666666;
      text-align: start;

      > img {
        height: 35px;
        width: 35px;
        border-radius: 50%;
        margin-right: 5px;
      }

      button {
        border: 0;
        background: transparent;
        padding: 0 10px;
      }
    }
    td:first-child {
      border-radius: 8px 0 0 8px;
    }
    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;
