import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  > button {
    border: 0;
    background: transparent;
    padding: 0 10px;

    > svg {
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#999999')};
      }
    }
  }
`;
