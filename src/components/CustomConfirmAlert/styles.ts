import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  padding: 40px;
  background: #fff;
  box-shadow: 0 20px 75px rgba(0, 0, 0, 0.23);
  color: #444444;
  > h1 {
    text-align: center;
  }

  > p {
    margin-top: 20px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;

  > button {
    margin-top: 20px;
    width: 100%;
    height: 30px;
    border: 0;
    background: #c53030;
    color: #ffffff;
    border-radius: 4px;

    & + button {
      margin-left: 20px;
      background: #cccccc;
    }
  }
`;
