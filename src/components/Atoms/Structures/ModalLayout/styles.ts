import styled from 'styled-components';

export const Container = styled.div<{
  big?: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  max-height: 90vh;
  max-width: ${({ big }) => (big ? '800px' : '400px')};
  height: min-content;
  margin: auto auto;
  background-color: var(--color-primary);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(255, 255, 255, 0.09) 0px 3px 12px;

  @media (max-width: 600px) {
    width: 90%;
  }

  > header {
    width: 100%;
    padding: 1.2rem 2rem;
    border-bottom: 1px solid var(--color-primary-dark);
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h2 {
      display: flex;
      align-items: center;
      line-height: 1;
      font-weight: 700;
      font-size: 1.2rem;
      color: #ccc;
    }

    > button {
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }

  > main {
    height: 100%;
    padding: 1.5rem 2rem;
    overflow-y: auto;
    color: #ccc;

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

  > footer {
    width: 100%;
    padding: 20px 32px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid var(--color-primary-dark);
    gap: 12px;
    position: relative;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: -51px;
      left: 24px;
      right: 24px;
      height: 50px;
      flex-shrink: 0;
      background-image: linear-gradient(to top, rgba(#fff, 0.75), transparent);
      pointer-events: none;
    }
  }
`;
