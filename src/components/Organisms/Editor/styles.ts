import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vh - var(--header-height));
  z-index: 5;
  overflow: hidden;

  > header {
    background-color: red;
    width: 100%;
    height: 100%;
  }

  .controls {
    border-bottom: 1px solid black;
    padding: 10px;
    background-color: Gainsboro;
  }

  .controls > div {
    margin-bottom: 10px;
  }

  .controls > div:last-child {
    margin-bottom: 0px;
  }

  .controls button {
    outline: 0;
    cursor: pointer;
    width: 150px;
    height: 30px;
    font-size: 0.85rem;
    border: 1px solid RoyalBlue;
    background-color: LightSteelBlue;
    margin-right: 10px;
    font-weight: bold;
    border-radius: 3px;
  }

  .controls button:hover {
    color: Snow;
    background-color: RoyalBlue;
  }
`;
