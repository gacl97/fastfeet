import styled, { css } from 'styled-components';
import { FiPackage, FiCircle } from 'react-icons/fi';

import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  border-radius: 4px;
  width: 100%;
  border: 1px solid gray;

  background: #7d40e7;
  color: #fff;
  font-weight: 500;
`;

export const TopSide = styled.div`
  > header {
    display: flex;
    align-items: center;
    font-size: 18px;

    > svg {
      margin-right: 5px;
    }
  }
`;

export const PackageIcon = styled(FiPackage)`
  height: 20px;
  width: 20px;

  color: #e6af2e;
`;

export const Info = styled.ul`
  margin-top: 10px;

  > li {
    display: flex;
    align-items: center;

    & + li {
      margin-top: 5px;
    }

    &:last-child {
      margin-bottom: 10px;
    }

    > strong {
      color: #e6af2e;
      font-weight: 500;
      margin-right: 5px;
    }

    > span {
      flex-wrap: wrap;
    }
  }

  border-bottom: 1px solid #fff;
`;

export const UnderSide = styled.div`
  margin-top: 10px;

  > div {
    display: flex;
    align-items: center;

    font-size: 14px;
  }

  > section {
    margin-top: 15px;

    display: flex;
    justify-content: space-between;
  }

  > button {
    margin-top: 20px;
    width: 100%;
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

export const Avatar = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin-right: 10px;
`;

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

export const BallIcon = styled(FiCircle)``;
