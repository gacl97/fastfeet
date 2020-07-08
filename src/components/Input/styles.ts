import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  color: #999999;

  padding: 13px;
  /* width: 100%; */

  div + div {
    margin-bottom: 15px;
  }

  display: flex;
  align-items: center;

  input {
    background: transparent;
    flex: 1;
    border: 0;

    &::placeholder {
      color: #999999;
    }
  }

  svg {
    margin-right: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #7d40e7;
      border-color: #7d40e7;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #7d40e7;
    `}
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  /* span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  } */
`;
