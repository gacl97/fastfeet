import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #f5f5f5;
  height: 100vh;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;

  max-width: 1366px;
  padding: 0 30px;
  margin: 0 auto;
  margin-top: 40px;

  h1 {
    color: black;
    font-size: 20px;
  }
`;

export const Box = styled.div`
  width: 400px;
  height: 350px;
  background: #7d40e7;
  border-radius: 4px;

  &:hover {
    box-shadow: 0 16px 16px 10px rgba(0, 0, 0, 0.24);
    transition: 0.2s;

    /* border: 3px solid #6f2dbd; */
  }

  header {
    padding: 20px 30px;

    > span {
      display: flex;
      align-items: center;

      h1 {
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

export const BoxContent = styled.div`
  height: 35%;

  padding: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 20px;
  margin-bottom: 12px;
  line-height: 25px;

  span {
    font-weight: 500;
  }

  strong {
    color: #e6af2e;
    margin-right: 2px;
  }
`;

export const LineStatus = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid #e6af2e;
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
`;

export const BoxFooter = styled.footer`
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
