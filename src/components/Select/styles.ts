import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  color: #999999;
  position: relative;

  > div {
    flex: 1;
  }

  display: flex;
  align-items: center;

  > svg {
    margin-right: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  position: absolute;
  right: 10%;

  > svg {
    margin: 0;
  }
`;
