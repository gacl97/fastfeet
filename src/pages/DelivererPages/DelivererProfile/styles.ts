import styled from 'styled-components';
import { shade } from 'polished';

import { FiCamera } from 'react-icons/fi';

export const Container = styled.div`
  height: 100%;
  padding: 20px;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1380px;
`;

export const AvatarInput = styled.div`
  position: relative;
  align-self: center;

  margin-top: 15px;

  > img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  label {
    cursor: pointer;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    position: absolute;
    border: 0;
    right: 0;
    bottom: 0;

    background: #7d40e7;
    border-radius: 50%;
    width: 48px;
    height: 48px;

    > input {
      display: none;
    }

    > svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    > span {
      font-size: 16px;
      font-weight: 500;
      color: #dddddd;
    }
    &:hover {
      background: ${shade(0.2, '#7d40e7')};
    }
  }
`;

export const CameraIcon = styled(FiCamera)``;

export const Content = styled.div`
  margin-top: 20px;

  background: #7d40e7;
  padding: 30px;
  border-radius: 5px;

  > h3 {
    margin: 5px 0;
  }

  > span {
    color: #fff;
  }
`;
