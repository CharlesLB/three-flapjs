import React from 'react';
import { Box, Boxes, Container } from './styles';

const LoadingCube: React.FC = () => {
  return (
    <Container>
      <Boxes>
        <Box>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Box>
        <Box>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Box>
        <Box>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Box>
        <Box>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Box>
      </Boxes>
    </Container>
  );
};

export default LoadingCube;
