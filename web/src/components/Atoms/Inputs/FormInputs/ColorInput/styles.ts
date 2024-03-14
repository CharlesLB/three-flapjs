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
    padding: 0rem;
    border-radius: 5px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 4rem;
    height: 2rem;
    background-color: transparent;
    border: none;
    border-radius: 0.1rem;
    cursor: pointer;

    &::-webkit-color-swatch {
      border-radius: 15px;
      border: none;
      border: 1px solid var(--color-primary-dark);
    }
    &::-moz-color-swatch {
      border-radius: 15px;
      border: none;
    }
  }

  > span {
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 18px;
    color: #bbb;
    width: 100%;
  }
`;
