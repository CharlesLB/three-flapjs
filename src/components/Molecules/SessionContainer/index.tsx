import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import SessionContainerNewSession from './SessionContainerNewSession';
import SessionStatus from './SessionStatus';

const SessionContainer: React.FC = () => {
  const [sessionId, setSessionId] = useState<string>();
  const [step, setStep] = useState<'new-session' | 'loading' | 'session-status'>('new-session');

  useEffect(() => {
    setTimeout(() => {
      setStep('session-status');
    }, 1000);
  }, []);

  return (
    <Container>
      {
        {
          'new-session': <SessionContainerNewSession />,
          loading: <h1>Loading...</h1>,
          'session-status': <SessionStatus />
        }[step]
      }
    </Container>
  );
};

export default SessionContainer;
