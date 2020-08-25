import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 84px;
  background: #ffffff;

  @media (max-width: 1025px) {
    display: flex;
    justify-content: center;
  }
`;

export const HeaderContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  max-width: 1380px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1025px) {
      display: none;
    }

    span {
      color: #666666;
      margin-bottom: 5px;
      font-size: 14px;
      font-weight: 500;
    }

    button {
      border: 0;
      background: transparent;
      color: #de3b3b;
      font-size: 14px;
      font-weight: 500;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#de3b3b')};
      }
    }
  }
  @media (max-width: 1025px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    button {
      border: 0;
      background: transparent;
    }

    > div {
    }
  }

  @media (min-width: 1025px) {
    .sign-out-button {
      display: none;
    }

    .menu-button {
      display: none;
    }
  }
`;

export const LogoImg = styled.img`
  height: 26px;
  width: 160px;
`;

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
`;

export const Menu = styled.div`
  margin-left: 10px;
  display: flex;

  @media (max-width: 1025px) {
    display: none;
  }

  > a {
    margin-right: 10px;
    color: #999999;
    text-decoration: none;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 500;
    transition: color 0.2s;
    height: 100%;

    &.active {
      color: #444444;
      border-bottom: 2px solid #7d40e7;
    }

    &:hover {
      color: ${shade(0.2, '#999999')};
    }
  }
`;
