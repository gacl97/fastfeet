import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  color: #999999;

  padding: 13px;
  width: 100%;

  margin-bottom: 15px;

  display: flex;
  align-items: center;

  input {
    background: transparent;
    flex: 1;
    border: 0;

    &::placeholder {
      color: #999999;
    }
  }

  svg {
    margin-right: 8px;
  }
`;
