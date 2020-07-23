import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface StatusProps {
  type: 'delivered' | 'pending' | 'withdrawal' | 'canceled';
}

const statusTypeVariations = {
  delivered: css`
    background: #dff0df;
    color: #2ca42b;
    svg {
      background: #2ca42b;
    }
  `,
  pending: css`
    background: #f0f0df;
    color: #c1bc35;
    svg {
      background: #c1bc35;
    }
  `,
  canceled: css`
    background: #fab0b0;
    color: #de3b3b;
    svg {
      background: #de3b3b;
    }
  `,
  withdrawal: css`
    background: #bad2ff;
    color: #4d85ee;
    svg {
      background: #4d85ee;
    }
  `,
};

export const Container = styled.div`
  background: #f5f5f5;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  padding: 34px 0;
  margin: 0 auto;

  > h1 {
    color: #444444;
    font-size: 24px;
    text-align: start;
    font-weight: 500;
  }

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #444444;
    font-size: 20px;
  }

  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 34px 0;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 45px;
      width: 200px;
      background: #7d40e7;
      margin-right: 16px;
      text-decoration: none;
      border-radius: 4px;
      color: #ffffff;
      text-transform: uppercase;

      font-size: 14px;
      font-weight: 500;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#7D40E7')};
      }

      > svg {
        margin-right: 8px;
        color: #ffffff;
      }
    }
  }

  table {
    width: 100%;
    border-spacing: 0 10px;

    th {
      text-align: start;
      color: #444444;
      font-weight: normal;
      padding: 10px 10px;
      font-size: 18px;
      line-height: 24px;
    }

    td {
      padding: 0 20px;
      border: 0;
      font-size: 16px;
      font-weight: normal;
      background: #ffffff;
      height: 57px;
      color: #666666;
      text-align: start;

      section {
        display: flex;
        justify-content: start;
        align-items: center;

        > img {
          height: 35px;
          width: 35px;
          border-radius: 50%;
          margin-right: 5px;
        }
      }

      > button {
        border: 0;
        background: transparent;
        padding: 0 10px;
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }
    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;

export const Status = styled.div<StatusProps>`
  height: 30px;
  width: 120px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;

  background: #dff0df;

  ${props => statusTypeVariations[props.type]}

  svg {
    height: 12px;
    width: 12px;
    margin-right: 5px;
    border-radius: 50%;
  }

  span {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
  }
`;
