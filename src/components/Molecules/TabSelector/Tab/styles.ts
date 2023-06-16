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

  border-right: 1px solid #383e40;
  border-top: 1px solid #444b4e;
  z-index: 10;

  ${({ active }) =>
    active
      ? css`
          background-image: linear-gradient(#42484b, #363b3d);
        `
      : css`
          background-image: -moz-linear-gradient(#363b3d, #2c3133);
          background-image: -webkit-linear-gradient(#363b3d, #2c3133);
          background-image: linear-gradient(#363b3d, #2c3133);
        `}

  padding: 0.4em 1rem 0.5em 1rem;
  font-size: 13px;
  color: #ccc;
  cursor: pointer;
`;
