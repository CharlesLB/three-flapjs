import React, { useState, useEffect } from 'react';
import { Steps } from 'intro.js-react';

const Intro: React.FC = () => {
  const [intro, setIntro] = useState<boolean>(false);

  const steps = [
    {
      title: 'Welcome',
      intro: "This is the automaton editor. Here you can create your AFD's and test it.",
      element: '#editor'
    },
    {
      element: '#side-list',
      title: 'Side List',
      intro: 'Here you can see all the options to build and test your automaton.'
    },
    {
      element: '#tab-test',
      title: 'Test',
      intro: 'Here you can test your automaton. You can test it by typing a word and clicking on the button.'
    },
    {
      element: '#automaton',
      title: 'Automaton',
      intro: 'Here you can see your automaton. You can create nodes and links by clicking on the buttons on the left.'
    },
    {
      element: '#logger',
      title: 'Logger',
      intro: 'Here you can see the logs of your automaton.'
    }
  ];

  const onExit = () => {
    localStorage.setItem('intro', 'true');
  };

  useEffect(() => {
    const intro = localStorage.getItem('intro');

    if (!intro) {
      setIntro(true);
    }
  }, []);

  if (!intro) {
    return null;
  }

  return <Steps enabled={true} steps={steps} initialStep={0} onExit={() => onExit()} options={{ hideNext: false }} />;
};

export default Intro;
