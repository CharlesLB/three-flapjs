import styled from 'styled-components';

export const Container = styled.div<{
  error?: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0.5rem;
  width: 100%;

  > label {
    color: #eee;
    font-size: 12px;
    margin-right: 0.5rem;
    margin-top: ${(props) => (props.error ? '-1rem' : '0')};
  }

  > main {
    position: relative;
    width: 100%;

    display: flex;
    flex-direction: column;

    > span {
      width: 100%;
      text-align: right;
      height: 1rem;
      font-size: 12px;
      color: var(--color-error);
    }
  }
`;
