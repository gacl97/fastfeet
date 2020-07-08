import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 84px;
  background: #ffffff;
`;

export const HeaderContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      color: #666666;
      margin-bottom: 5px;
      font-size: 14px;
      font-weight: 500;
    }

    a {
      text-decoration: none;
      color: #de3b3b;
      font-size: 14px;
      font-weight: 500;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#de3b3b')};
      }
    }
  }
`;

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;

  img {
    height: 26px;
    width: 160px;
  }
`;

export const Menu = styled.div`
  margin-left: 58px;
  display: flex;

  a {
    margin-right: 21px;
    color: #999999;
    text-decoration: none;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 500;
    transition: color 0.2s;

    &.active {
      color: #444444;
    }

    &:hover {
      color: ${shade(0.2, '#999999')};
    }
  }
`;
