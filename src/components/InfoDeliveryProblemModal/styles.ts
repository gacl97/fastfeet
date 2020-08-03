import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background-color: #0a0a14ef;
  opacity: 0.99;
`;

export const Box = styled.div`
  width: 450px;
  height: 425px;

  background: #ffffff;
  border-radius: 4px;
  padding: 25px;
`;

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 500;
    color: #444444;
  }

  > button {
    border: 0;
    background: transparent;
    color: #de3b3b;
  }
`;

export const Content = styled.div`
  margin-top: 20px;

  span {
    color: #666666;
    font-size: 14px;
    text-align: justify;
  }
`;
