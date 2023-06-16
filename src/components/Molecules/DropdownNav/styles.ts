import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.4em 2.1em 0.4em 1em;
  cursor: pointer;
  position: relative;
  z-index: 999;
  font-size: 12px;

  > a {
    color: #ccc;

    &:hover {
      color: #fff;
    }
  }

  > ul {
    display: none;
    position: fixed;
    top: 1.6rem;
    left: 0rem;
    list-style: none;
    width: 200px;
    position: absolute;
    background-color: var(--color-primary);
    border: 1px solid #232628;
    border-top: #333 1px solid;

    > li {
      padding: 2px 10px;

      > a {
        text-decoration: none;
        display: block;
        line-height: 1.5;
        zoom: 1;
        font-weight: normal;
        color: #ccc;

        &:hover {
          color: #fff;
        }
      }
    }

    &:hover {
      display: block;
    }
  }

  &:hover {
    > ul {
      display: block;
    }
  }
`;
