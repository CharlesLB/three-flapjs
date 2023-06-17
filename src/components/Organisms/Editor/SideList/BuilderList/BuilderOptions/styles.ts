import styled, { css } from 'styled-components';

export const Container = styled.div`
  > h3 {
    color: #eee;
    font-size: 12px;
    padding-bottom: 5px;
    padding-left: 10px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-top: 0.5rem;
  }

  > div {
    margin: 1rem 0 2rem 0;

    > h3 {
      color: #eee;
      font-size: 12px;
      padding-bottom: 5px;
      padding-left: 10px;
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    > ul {
      border-top: 1px solid #232628;
    }
  }
`;

export const ListItem = styled.li<{
  active: boolean;
}>`
  border-top: 1px solid #383e40;
  border-bottom: 1px solid #2a2e30;
  padding: 0.4rem 0.6rem;
  font-size: 11px;
  color: #ccc;
  cursor: pointer;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background: #2a2e30;
    color: #fff;
    border-top: 1px solid #2a2e30;
  }

  ${({ active }) =>
    active &&
    css`
      background: #2a2e30;
      color: #fff;
      border-top: 1px solid #2a2e30;
    `}
`;
