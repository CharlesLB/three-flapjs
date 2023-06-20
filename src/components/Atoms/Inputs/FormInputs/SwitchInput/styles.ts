import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #666666;
    margin-bottom: 0.2rem;
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
    font-size: 12px;
    line-height: 18px;
    color: #f26852;
    margin-top: 0.2rem;
  }

  > input:disabled {
    background: #e5e5e5;
    cursor: not-allowed;
  }
`;
