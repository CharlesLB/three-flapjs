import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const NewSectionButton = styled.button`
  display: flex;
  white-space: nowrap;
  width: 100%;
  background-image: linear-gradient(#42484b, #363b3d);
  color: #eee;
  padding: 0.2rem 1rem;
  font-size: 12px;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background-image: -moz-linear-gradient(#363b3d, #2c3133);
    background-image: -webkit-linear-gradient(#363b3d, #2c3133);
    background-image: linear-gradient(#363b3d, #2c3133);
  }
`;
