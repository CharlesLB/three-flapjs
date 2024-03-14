import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Boxes = styled.div`
  --size: 32px;
  --duration: 800ms;
  height: calc(var(--size) * 2);
  width: calc(var(--size) * 3);
  position: relative;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  margin-top: calc(var(--size) * 1.5 * -1);
  transform: rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px);
`;

export const Box = styled.div`
  --size: 32px;
  --duration: 800ms;
  width: var(--size);
  height: var(--size);
  top: 0;
  left: 0;
  position: absolute;
  transform-style: preserve-3d;
  &:nth-child(1) {
    transform: translate(100%, 0);
    animation: box1 var(--duration) linear infinite;
  }
  &:nth-child(2) {
    transform: translate(0, 100%);
    animation: box2 var(--duration) linear infinite;
  }
  &:nth-child(3) {
    transform: translate(100%, 100%);
    animation: box3 var(--duration) linear infinite;
  }
  &:nth-child(4) {
    transform: translate(200%, 0);
    animation: box4 var(--duration) linear infinite;
  }
  & > div {
    --background: ${lighten('0.2', '#313638')};
    --top: auto;
    --right: auto;
    --bottom: auto;
    --left: auto;
    --translateZ: calc(var(--size) / 2);
    --rotateY: 0deg;
    --rotateX: 0deg;
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--background);
    top: var(--top);
    right: var(--right);
    bottom: var(--bottom);
    left: var(--left);
    transform: rotateY(var(--rotateY)) rotateX(var(--rotateX)) translateZ(var(--translateZ));

    &:nth-child(1) {
      --top: 0;
      --left: 0;
    }
    &:nth-child(2) {
      --background: ${lighten('0.5', '#313638')};
      --right: 0;
      --rotateY: 90deg;
    }
    &:nth-child(3) {
      --background: ${lighten('0.4', '#313638')};
      --rotateX: -90deg;
    }
    &:nth-child(4) {
      --background: ${lighten('0.1', '#313638')};
      --top: 0;
      --left: 0;
      --translateZ: calc(var(--size) * 3 * -1);
    }
  }
  @keyframes box1 {
    0%,
    50% {
      transform: translate(100%, 0);
    }
    100% {
      transform: translate(200%, 0);
    }
  }

  @keyframes box2 {
    0% {
      transform: translate(0, 100%);
    }
    50% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(100%, 0);
    }
  }

  @keyframes box3 {
    0%,
    50% {
      transform: translate(100%, 100%);
    }
    100% {
      transform: translate(0, 100%);
    }
  }

  @keyframes box4 {
    0% {
      transform: translate(200%, 0);
    }
    50% {
      transform: translate(200%, 100%);
    }
    100% {
      transform: translate(100%, 100%);
    }
  }
`;
