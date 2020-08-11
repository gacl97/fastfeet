import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  adminIsSelected: boolean;
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 4px;

  width: 100%;
  height: 520px;
  max-width: 430px;

  form {
    margin-top: 10px;
    width: 310px;
    text-align: center;

    h1 {
      text-align: start;
      color: #444444;
      font-size: 16px;
      font-weight: 500;
      margin: 9px 0;
    }

    div + button {
      margin-top: 15px;
    }

    > button {
      width: 100%;
    }
  }

  > img {
    margin-top: 80px;
    width: 300px;
    height: 80px;
  }
`;

export const ButtonTypes = styled.div<ButtonProps>`
  display: flex;
  width: 100%;
  max-width: 310px;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100%;
    background: transparent;
    border: 0;
    transition: background-color 0.2s;

    ${props =>
      props.adminIsSelected
        ? css`
            &:first-child {
              border-bottom: 3px solid #7d40e7;
            }
          `
        : css`
            &:last-child {
              border-bottom: 3px solid #7d40e7;
            }
          `}

    & + button {
      margin-left: 5px;
    }

    &:hover {
      background: ${shade(0.2, '#fff')};
    }
  }
`;
