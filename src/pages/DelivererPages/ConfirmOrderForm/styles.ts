import styled, { css } from 'styled-components';

import { FiSend, FiChevronLeft } from 'react-icons/fi';
import { shade } from 'polished';

interface SignatureField {
  isErrored: boolean;
}

export const Container = styled.div`
  height: 100%;
  padding: 20px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1380px;

  > button {
    margin-top: 20px;
    width: 200px;
    height: 45px;

    display: flex;
    align-items: center;
    justify-content: center;

    align-self: flex-end;

    border: 0;
    background: #7d40e7;

    color: #fff;
    font-weight: 500;
    border-radius: 4px;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#7d40e7')};
    }

    @media (max-width: 415px) {
      width: 100%;
    }
  }

  > form {
    margin-top: 20px;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: flex-end;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 45px;
    width: 150px;
    background: #7d40e7;
    color: #fff;
    font-weight: 500;
    border: 0;
    border-radius: 4px;

    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#7d40e7')};
    }

    @media (max-width: 415px) {
      width: 100%;
      height: 35px;
    }
  }
`;

export const ContentMiddle = styled.div<SignatureField>`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 20px;

  label {
    border: 1px solid #ebe9e9;
    cursor: pointer;
    display: flex;
    flex-direction: column;

    ${props =>
      props.isErrored &&
      css`
        border-color: #c53030;
      `}

    > img {
      max-width: 700px;
      max-height: 400px;

      @media (max-width: 769px) {
        width: 100%;
      }
    }

    > input {
      display: none;
    }

    > span {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 45px;
      background: #ebe9e9;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${shade(0.2, '#ebe9e9')};
      }
    }
  }
`;

export const BackIcon = styled(FiChevronLeft)`
  height: 22px;
  width: 22px;
  margin-right: 3px;
  color: #fff;
`;

export const SendIcon = styled(FiSend)`
  margin-left: 5px;

  height: 18px;
  width: 18px;
`;
