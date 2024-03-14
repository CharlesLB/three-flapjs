import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: absolute;

  > header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    > aside {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      padding: 0.5rem;

      > * {
        margin-right: 0.5rem;

        &:last-child {
          margin-right: 0;
        }
      }

      > a {
        cursor: pointer;
      }
    }
  }

  > main {
    overflow: auto;
    height: 100%;
    padding-top: 0.5rem;

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

export const Log = styled.div<{
  type: 'info' | 'success' | 'error';
}>`
  font-size: 14px;
  padding: 0.2rem 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: row;

  > aside {
    width: 5rem;
    color: #ccc;
    text-transform: uppercase;
  }

  > span {
    > strong {
      font-weight: 400;
      margin-right: 0.5rem;
    }

    width: 100%;
    color: ${({ type }) => (type === 'error' ? 'var(--color-error)' : type === 'success' ? 'var(--color-success)' : '#fff')};
  }
`;
