import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > * {
    margin-bottom: 0.2rem;
  }

  > label {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #fff;
  }

  > input {
    padding: 0.8rem;
    background: #ffffff;
    border: 1px solid #939598;
    border-radius: 5px;
  }

  > span {
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 18px;
    color: #bbb;
    width: 100%;
  }

  > input:disabled {
    background: #e5e5e5;
    cursor: not-allowed;
  }
`;
