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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  max-width: 1400px;
  padding: 0 30px;
  margin: 0 auto;

  > span {
    grid-column-start: 2;
    color: #444444;
    font-size: 20px;
  }
`;

export const Box = styled.div`
  width: 400px;
  height: 400px;
  background: #7d40e7;
  border-radius: 4px;

  padding: 10px 30px;

  > span {
    display: flex;
    align-items: center;
    height: 61px;
    font-size: 18px;

    svg {
      margin-right: 10px;
      color: #e6af2e;
      height: 30px;
      width: 30px;
    }
  }

  &:hover {
    box-shadow: 0 16px 16px 10px rgba(0, 0, 0, 0.24);
    transition: 0.2s;
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 8px;

  > span {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    & + span {
      margin-top: 5px;
    }
  }

  > button {
    margin-top: 20px;
    height: 40px;
    border: 0;
    border-radius: 4px;

    background: #e6af2e;
    color: #fff;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#e6af2e')};
    }
  }
`;

export const OrderDeliverer = styled.div`
  margin-top: 12px;

  > section {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
`;

export const DelivererInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    margin-right: 10px;
  }
`;

export const Separator = styled.div`
  margin-top: 10px;
  border-bottom: 1px solid #fff;
`;

export const Status = styled.div<StatusProps>`
  height: 30px;
  width: 120px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  background: #dff0df;

  ${props => statusTypeVariations[props.type]}

  svg {
    height: 12px;
    width: 12px;
    margin-right: 5px;
    border-radius: 50%;
  }

  > span {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1400px;
  padding: 0 30px;
  margin: 34px auto;

  h1 {
    font-size: 24px;
    color: #444444;
  }

  > div {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      /* Div referente ao input de busca */
      margin-right: 10px;
    }

    > a {
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
`;
