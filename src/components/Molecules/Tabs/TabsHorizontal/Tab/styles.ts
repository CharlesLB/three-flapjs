import styled, { css } from 'styled-components';

export const Container = styled.div<{
  active: boolean;
}>`
  position: relative;
  display: inline;
  float: left;
  padding: 0;
  margin: 0;
  background: #313638;
  background-size: 100%;
  z-index: 10;

  ${({ active }) =>
    active
      ? css`
          color: #fff;
          border-bottom: #fff 1px solid;
          font-weight: 700;
        `
      : css`
          color: #ccc;
          border-bottom: transparent 1px solid;
        `}

  padding: 0.4em 1rem 0.5em 1rem;
  font-size: 13px;
  cursor: pointer;
`;
