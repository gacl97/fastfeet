import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 4px;

  width: 100%;
  height: 520px;
  max-width: 430px;

  form {
    margin: 40px 0;
    width: 310px;
    text-align: center;

    h1 {
      text-align: start;
      color: #444444;
      font-size: 16px;
      font-weight: 500;
      margin: 9px 0;
    }

    div + button {
      margin-top: 15px;
    }

    button {
      width: 100%;
    }
  }

  img {
    max-width: 300px;
    max-height: 300px;
    width: auto;
    height: auto;
  }
`;
