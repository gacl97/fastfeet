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

export const Container = styled.header<MenuProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 70px;
  left: 0;
  background: #444444;
  width: 100%;

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
    left: 22px;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0px 8px 8px;
    border-color: transparent transparent #444444;
  }
`;
