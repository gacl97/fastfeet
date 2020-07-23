import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;

  background-color: #0a0a14ef;
  opacity: 0.99;
`;

export const Box = styled.div`
  width: 450px;
  height: 353px;

  background: #ffffff;
  border-radius: 4px;
  padding: 25px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #444444;
    font-size: 14px;
  }

  > button {
    border: 0;
    background: transparent;
    color: #de3b3b;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;

  span {
    font-size: 16px;
    color: #666666;
  }
`;

export const Separator = styled.div`
  margin-top: 10px;
  border-bottom: 1px solid #999;
`;

export const Dates = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  h1 {
    color: #444444;
    font-size: 14px;
    margin-bottom: 4px;
  }

  span {
    > strong {
      font-weight: 500;
    }

    font-size: 16px;
    color: #666666;

    & + span {
      margin-top: 5px;
    }
  }
`;

export const Signature = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    align-self: flex-start;
    color: #444444;
    font-size: 14px;
    margin-bottom: 4px;
  }

  > img {
    margin-top: 23px;
    width: 235px;
    height: 36px;
  }
`;
