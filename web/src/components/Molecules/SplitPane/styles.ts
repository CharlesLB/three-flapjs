import styled from 'styled-components';
import SplitPane from 'react-split-pane';

export const Container = styled(SplitPane)`
  > * {
    height: 100%;
    width: 100%;
  }

  .Resizer {
    background: #000;
    opacity: 0.2;
    z-index: 1;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -moz-background-clip: padding;
    -webkit-background-clip: padding;
    background-clip: padding-box;
  }

  .Resizer:hover {
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  .Resizer.horizontal {
    height: 6px;
    cursor: row-resize;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    &::before {
      content: '';

      margin: 0 auto;
      position: absolute;
      left: calc(50% - 2.5rem);
      width: 5rem;
      height: 6px;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }

  .Resizer.horizontal:hover {
    background-color: rgba(0, 0, 0, 1);
  }

  .Resizer.vertical {
    width: 6px;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: col-resize;

    &::before {
      content: '';

      margin: 0 auto;
      position: absolute;
      top: calc(50% - 2.5rem);
      height: 5rem;
      width: 6px;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }

  .Resizer.vertical:hover {
    background-color: rgba(0, 0, 0, 1);
  }

  .Resizer.disabled {
    cursor: not-allowed;
  }

  .Resizer.disabled:hover {
    border-color: transparent;
  }
`;
