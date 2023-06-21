import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;

  > header {
    width: 100%;
    margin-bottom: 1rem;

    > h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 29px;
      color: #666666;
    }
  }

  > main {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 1rem;
`;

interface IField {
  flex?: number;
}

export const Field = styled.div<IField>`
  ${({ flex }) => flex && `flex: ${flex};`}

  width: 100%;
  margin-right: 0.5rem;
  margin-left: 0.5rem;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;
