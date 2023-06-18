import styled from 'styled-components';

interface IBackdropProps {
  active: boolean;
}

export const Container = styled.div<IBackdropProps>`
  position: fixed;
  width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  margin: 0;
  top: 0;
  left: 0;
  transition: var(--transition);
  background-color: rgba(0, 0, 0, 0.5);
`;
