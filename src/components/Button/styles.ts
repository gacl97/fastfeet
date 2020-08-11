import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #7d40e7;
  height: 45px;
  border: 0;
  border-radius: 4px;

  color: #ffffff;
  padding: 0 16px;
  font-weight: 500;

  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#7d40e7')};
  }
`;
