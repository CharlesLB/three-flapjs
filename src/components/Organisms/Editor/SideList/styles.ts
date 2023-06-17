import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  > header {
    padding-top: 1rem;
    border-bottom: 1px solid var(--color-primary-dark);
  }

  > main {
    height: 100%;
    overflow: auto;
  }
`;
