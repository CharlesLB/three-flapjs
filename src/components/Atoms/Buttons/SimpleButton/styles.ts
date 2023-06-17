import styled from 'styled-components';

export const Container = styled.button`
  font-size: 12px;
  padding: 0.4rem 1rem;
  border-radius: 0.2rem;
  background-color: var(--color-primary-dark);
  color: #ccc;
  cursor: pointer;

  transition: 0.2s ease-in-out;

  &:hover {
    background-image: linear-gradient(#42484b, #363b3d);
  }
`;
