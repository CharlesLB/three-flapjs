import styled, { css } from 'styled-components';

export const Container = styled.input<{
  error?: boolean;
}>`
  padding: 0.5rem;
  border: var(--color-primary-dark);
  background: #363b3d;
  font-size: 12px;
  color: #ccc;
  border-radius: 0.2rem;
  width: 100%;

  ${(props) =>
    props.error &&
    css`
      border: 1px solid var(--color-error);
    `}
`;
