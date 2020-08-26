import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';

export const Container = styled.header`
  height: 84px;
  background: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1023px) {
    display: none;
  }
`;

export const Main = styled.div`
  width: 100%;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    border: 0;
    background: transparent;
  }
`;

export const MenuIcon = styled(FiMenu)`
  width: 22px;
  height: 22px;
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
`;
