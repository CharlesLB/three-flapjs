import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* width: 100%; */
  height: 100%;

  overflow: scroll;
  max-width: min-content;

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-corner,
  ::-webkit-resizer {
    background: transparent;
  }

  ::-webkit-scrollbar-track-piece {
    background: #313638;
    border-radius: 6px;
  }
`;
