import styled, { css } from 'styled-components';

export const Container = styled.div<{
  active: boolean;
}>`
  background-color: var(--color-primary);
  padding: 2px 10px;
  border: 1px solid #232628;
  border-top: 1px solid #333;
  width: min-content;
  height: min-content;
  /* position: absolute; */
  /* top: 1.6rem; */

  ::before {
    content: '';
    position: absolute;
    top: -5px;
    right: 20px;
    height: 20px;
    width: 20px;
    background: var(--secondary-bg);
    transform: rotate(45deg);
  }

  ${({ active }) =>
    active
      ? css`
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          transition: var(--speed) ease;
        `
      : css`
          opacity: 0;
          visibility: hidden;
          transform: translateY(-20px);
          transition: var(--speed) ease;
        `}
`;
