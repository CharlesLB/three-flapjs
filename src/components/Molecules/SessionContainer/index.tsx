import React, { useState } from 'react';

import { Container } from './styles';
import SessionContainerNewSession from './SessionContainerNewSession';

const SessionContainer: React.FC = () => {
  const [sessionId, setSessionId] = useState<string>();
  const [step, setStep] = useState<'new-session' | 'loading' | 'session-status'>('new-session');

  return (
    <Container>
      {
        {
          'new-session': <SessionContainerNewSession />,
          loading: <div>Loading...</div>,
          'session-status': <div>Session status</div>
        }[step]
      }
    </Container>
  );
};

export default SessionContainer;
