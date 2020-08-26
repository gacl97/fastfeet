import styled from 'styled-components';
import { shade } from 'polished';

import { MdReportProblem } from 'react-icons/md';

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

export const ReportIcon = styled(MdReportProblem)``;

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

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  background: #bdb2ff;

  margin-top: 18px;
  height: 77px;
  width: 100%;
  padding: 0 16px;

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
