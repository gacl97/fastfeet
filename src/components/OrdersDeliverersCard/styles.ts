import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  width: 100%;

  background: #7d40e7;
  color: #fff;
  font-weight: 500;

  > header {
    padding: 16px;
    > span {
      display: flex;
      align-items: center;

      > h1 {
        font-size: 20px;
        color: #fff;
      }

      > svg {
        height: 25px;
        width: 25px;
        margin-right: 10px;
        color: #e6af2e;
      }
    }
  }
`;

export const Info = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;

  line-height: 25px;

  > span {
    font-weight: 500;
  }

  strong {
    color: #e6af2e;
    margin-right: 2px;
  }
`;

export const Status = styled.div`
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 20px;

  @media (max-width: 409px) {
    justify-content: flex-start;
    margin-left: 20px;
  }
`;

export const LineStatus = styled.div`
  display: flex;
  border-top: 1px solid #e6af2e;

  @media (max-width: 409px) {
    width: 250px;
  }
`;

export const LineStatusCircle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: -9px;

  > span {
    font-size: 12px;
    text-align: center;
    height: 40px;
    width: 105px;

    font-weight: 500;
    color: #fff;
  }

  > svg {
    margin-bottom: 5px;
    height: 18px;
    width: 18px;
    border-radius: 50%;
  }

  &:first-child {
    display: flex;
    align-items: flex-start;
    margin-right: 30px;

    > span {
      margin-left: -40px;
    }
  }

  &:last-child {
    display: flex;
    align-items: flex-end;

    > span {
      margin-left: 9px;
      padding-left: 70px;
    }
  }

  @media (max-width: 409px) {
    &:first-child {
      margin-right: 10px;
    }
    &:last-child {
      align-items: center;
      margin-left: 15px;

      > span {
        padding-left: 0;
        padding-right: 20px;
      }
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #bdb2ff;

  height: 77px;
  width: 100%;

  h1 {
    font-size: 14px;
    color: #6f2dbd;
    font-weight: bold;
  }

  span {
    font-size: 16px;
    font-weight: 500;
  }

  > a {
    border: 0;
    background: transparent;
    color: #6f2dbd;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      color: ${shade(0.2, '#6f2dbd')};
    }
  }

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
