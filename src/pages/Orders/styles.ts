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
  padding: 34px 0;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;

  > h1 {
    color: #444444;
    font-size: 24px;
    text-align: start;
    font-weight: 500;
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
    border-spacing: 0; /* Removes the cell spacing via CSS */
    border-spacing: 0 20px;

    th {
      text-align: start;
      padding: 0 20px;
      color: #444444;
    }

    tr + tr {
      height: 57px;
      background: #ffffff;
    }

    td {
      color: #666666;
      text-align: start;
      padding: 0 20px;

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

      button {
        border: 0;
        background: transparent;
        padding: 0 10px;
      }
    }
  }
`;

export const Status = styled.div<StatusProps>`
  height: 30px;
  width: 110px;

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
