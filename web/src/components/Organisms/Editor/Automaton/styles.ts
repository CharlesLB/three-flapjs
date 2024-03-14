import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;

  > header {
    top: 0;
    right: 0;
    width: min-content;
    height: min-content;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0.5rem;
    z-index: 999999999999999;
    position: absolute;

    > a {
      cursor: pointer;
    }
  }

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
