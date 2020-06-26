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
  height: 450px;
  max-width: 360px;

  form {
    margin: 40px 0;
    width: 300px;
    text-align: center;

    h1 {
      text-align: start;
      color: #444444;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 9px;
    }
  }

  img {
    max-width: 300px;
    max-height: 300px;
    width: auto;
    height: auto;
  }
`;
