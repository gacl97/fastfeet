import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  height: 84px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 30px;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1366px;

  padding: 12px 0;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 40px;
    height: 30px;
  }

  a {
    color: #666666;
    text-decoration: none;

    & + a {
      margin-left: 10px;
    }

    &.active {
      color: #444444;
      border-bottom: 2px solid #7d40e7;
    }

    &:hover {
      color: ${shade(0.2, '#999999')};
    }
  }
`;

export const DelivererInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 10px;
  }

  span {
    color: #7d40e7;

    @media (max-width: 1080px) {
      display: none;
    }
  }
`;
