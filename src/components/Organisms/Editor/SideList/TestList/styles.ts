import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 1rem;

  > header {
    border-bottom: 1px solid #232628;

    > h2 {
      color: #eee;
      font-size: 14px;
      padding-bottom: 5px;
      padding-left: 10px;
      font-weight: bold;
      letter-spacing: 1px;
    }
  }

  > main {
    border-top: 1px solid #383e40;

    display: flex;
    flex-direction: column;
  }

  > footer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0.5rem;
  }
`;
