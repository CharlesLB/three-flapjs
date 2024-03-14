import styled, { css } from 'styled-components';

export const Container = styled.button<{
  ghost?: boolean;
}>`
  padding: 12px 20px;
  border-radius: 8px;
  background-color: transparent;
  border: 0;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;

  ${({ ghost }) =>
    ghost
      ? css`
          color: #ccc;
          &:hover,
          &:focus {
            background-color: #dfdad7;
            color: #000;
          }
        `
      : css`
          background-color: #fff;
          color: #000;

          &:hover {
            background-color: #f5f5f5;
            box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 0px, rgba(255, 255, 255, 0.1) 0px 8px 24px, rgba(255, 255, 255, 0.1) 0px 16px 48px;
          }
        `}
`;
