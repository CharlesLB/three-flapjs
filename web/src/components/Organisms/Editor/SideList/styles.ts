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
    padding-bottom: 1rem;

    ::-webkit-scrollbar {
      width: 0.4rem;
    }

    ::-webkit-scrollbar-track {
      background: var(--color-primary);
    }

    ::-webkit-scrollbar-thumb {
      background: var(--color-primary-dark);
      border-radius: 0.5rem;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`;
