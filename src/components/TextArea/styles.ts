import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  > label {
    font-size: 20px;
    font-weight: 500;
  }

  > textarea {
    width: 100%;
    height: 16rem;
    min-height: 8rem;
    margin-top: 0.8rem;
    border-radius: 4px;
    background: #fff;
    border: 1px solid #fff;
    outline: 0;
    resize: vertical;
    padding: 1.2rem 1.6rem;
    font-size: 16px;

    ${props =>
      props.isErrored &&
      css`
        border-color: #c53030;
      `}

    &:focus {
      border-color: #7d40e7;
    }
  }
`;
