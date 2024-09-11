import React from 'react';

import { Container } from './styles';

const SessionStatus: React.FC = () => {
  return (
    <Container>
      <span>Session Name</span>
      <div>Users image</div>
      <button>Copy link</button>
    </Container>
  );
};

export default SessionStatus;
