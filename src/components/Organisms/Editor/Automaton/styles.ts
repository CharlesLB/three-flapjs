import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  max-width: min-content;
  background-color: red !important;

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

export const Content = styled.div`
  position: absolute;
`;
