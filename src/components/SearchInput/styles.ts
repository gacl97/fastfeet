import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  color: #999999;

  padding: 13px;

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
