import React, { useState } from 'react';

import { Container } from './styles';
import SessionContainerNewSession from './SessionContainerNewSession';

const SessionContainer: React.FC = () => {
  const [sessionId, setSessionId] = useState<string>();
  const [step, setStep] = useState<'new-session'>('new-session');

  return (
    <Container>
      {
        {
          'new-session': <SessionContainerNewSession />
        }[step]
      }
    </Container>
  );
};

export default SessionContainer;
