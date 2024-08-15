import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  > label {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #fff;
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

export const Input = styled.input<{
  error?: boolean;
}>`
  padding: 0.5rem;
  border: var(--color-primary-dark);
  background: #363b3d;
  font-size: 12px;
  color: #ccc;
  border-radius: 0.2rem;
  width: 100%;
  margin-top: 0.2rem;

  ${(props) =>
    props.error &&
    css`
      border: 1px solid var(--color-error);
    `}
`;
