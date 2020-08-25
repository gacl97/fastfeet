import styled, { css } from 'styled-components';
import { FiXCircle, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background-color: #0a0a14ef;
  opacity: 0.99;
`;

export const Box = styled.div`
  width: 300px;
  height: 400px;

  background: #ffffff;
  border-radius: 4px;
  padding: 25px;

  @media (min-width: 768px) {
    width: 450px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #444444;
    font-size: 14px;
  }

  > button {
    border: 0;
    background: transparent;
  }
`;

export const CloseIcon = styled(FiXCircle)`
  color: #de3b3b;
  transition: color 0.2s;

  &:hover {
    color: ${shade(0.2, '#de3b3b')};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;

  > h1 {
    color: #444444;
    font-size: 14px;
    margin-bottom: 4px;
  }

  > span {
    font-size: 16px;
    color: #666666;

    & + span {
      margin-top: 5px;
    }

    &:last-child {
      margin-bottom: 10px;
    }
  }

  strong {
    font-weight: 500;
  }

  border-bottom: 1px solid #999;
`;

export const Signature = styled.img`
  margin: 10px 0;
  width: 235px;
  height: 36px;
`;

export const Footer = styled.footer`
  display: flex;
  margin-top: 15px;

  > a {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 40px;
    width: 100%;
    margin-right: 10px;

    border-radius: 4px;
    text-decoration: none;

    background: #7d40e7;
    color: #fff;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#7d40e7')};
    }
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;

    border: 0;
    border-radius: 4px;
    background: #de3b3b;
    color: #fff;
    font-weight: 500;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#de3b3b')};
    }
  }
`;

const iconCSS = css`
  margin-right: 5px;
`;

export const EditIcon = styled(FiEdit2)`
  ${iconCSS}
`;

export const TrashIcon = styled(FiTrash2)`
  ${iconCSS}
`;
