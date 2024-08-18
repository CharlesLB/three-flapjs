import styled from 'styled-components';

export const Container = styled.button<{
  ghost?: boolean;
}>`
  padding: 12px 0px;
  border-radius: 8px;
  background-color: transparent;
  border: 0;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
  color: #ccc;

  &:hover {
    color: #fff;
  }
`;
