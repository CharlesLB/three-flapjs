import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vh - var(--header-height));
  z-index: 5;

  > header {
    background-color: red;
    width: 100%;
    height: 100%;
  }
`;
