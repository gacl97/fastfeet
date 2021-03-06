import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  z-index: 1;
  position: absolute;
  width: 220px;
  left: px;
  background: #fff;
  border: 1px solid #00000026;

  border-radius: 4px;
  padding: 10px 0;

  &::before {
    content: '';
    border-style: solid;
    border-color: #00000026 transparent;
    border-width: 0 6px 6px 6px;
    bottom: 100%;
    position: absolute;
    left: 5%;
  }
`;

export const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;

  > a {
    display: flex;
    align-items: center;
    color: #999999;
    font-size: 15px;

    text-decoration: none;
    border-bottom: 1px solid #999999;
    margin-left: 15px;

    padding-bottom: 10px;

    svg {
      margin-right: 10px;
    }

    &:last-child {
      border-bottom: none;
    }

    & + button {
      margin-top: 13px;
    }

    & + a {
      margin-top: 13px;
    }

    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, '#999999')};
    }
  }

  > button {
    border: 0;
    background: transparent;
    padding-bottom: 10px;
    border-bottom: 1px solid #999;
    margin-left: 15px;
    display: flex;
    align-items: center;
    color: #999999;
    font-size: 15px;

    svg {
      margin-right: 10px;
    }

    &:last-child {
      border-bottom: none;
    }

    & + button {
      margin-top: 13px;
    }

    & + a {
      margin-top: 13px;
    }

    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, '#999999')};
    }
  }
`;
