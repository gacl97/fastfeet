import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface BallonProps {
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

export const Container = styled.div<BallonProps>`
  position: absolute;
  right: 0;
  top: calc(100% + 24px);
  width: 256px;

  box-shadow: rgba(0, 0, 0, 0.44) 0px 5px 20px;

  ${props => isOpenOrIsClosed[props.isOpen]}

  padding: 0px;
  background: #7d40e7;
  border-radius: 5px;
  transition: opacity 0.2s ease 0s, visibility 0.2s ease 0s;

  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    right: 19px;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0px 8px 8px;
    border-color: transparent transparent #7d40e7;
  }

  a {
    color: black;
    text-decoration: none;
    padding: 10px 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &:first-child {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    > svg {
      width: 16px;
      height: 16px;
    }

    &:hover {
      background: ${shade(0.2, '#7d40e7')};
    }
  }

  button {
    color: black;
    padding: 10px 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 0;
    background: #7d40e7;

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    &:hover {
      background: ${shade(0.2, '#7d40e7')};
    }
  }
`;
