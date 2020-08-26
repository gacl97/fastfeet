import styled, { css } from 'styled-components';

interface MenuProps {
  isOpen: 'hidden' | 'visible';
}

const isOpenOrIsClosed = {
  hidden: css`
    opacity: 0;
    visibility: hidden;
  `,
  visible: css`
    opacity: 1;
    visibility: visible;
  `,
};

export const Container = styled.div<MenuProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 70px;
  left: 0;
  background: #7d40e7;
  width: 100%;
  z-index: 3;

  box-shadow: rgba(0, 0, 0, 0.44) 0px 5px 20px;
  transition: opacity 0.2s ease 0s, visibility 0.2s ease 0s;

  ${props => isOpenOrIsClosed[props.isOpen]}

  > a {
    color: #fff;
    text-decoration: none;
    padding: 10px;
  }

  @media (min-width: 1025px) {
    display: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 32px;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0px 8px 8px;
    border-color: transparent transparent #7d40e7;
  }
`;
