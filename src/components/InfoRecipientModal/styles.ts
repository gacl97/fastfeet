import styled from 'styled-components';
import { shade } from 'polished';

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
  height: 300px;

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
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#de3b3b')};
    }
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

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

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;

  > a {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 40px;
    width: 100%;
    margin-right: 10px;

    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;

    background: #7d40e7;
    color: #fff;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#7d40e7')};
    }

    > svg {
      margin-right: 5px;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;

    border: 0;
    background: #de3b3b;
    color: #fff;
    font-weight: 500;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#de3b3b')};
    }

    > svg {
      margin-right: 5px;
    }
  }
`;
