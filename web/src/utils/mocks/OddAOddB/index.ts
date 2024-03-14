const OddAOddB = {
  nodes: [
    { id: 55, name: 'II', start: false, end: true },
    { id: 46, name: 'PP', start: true },
    { id: 48, name: 'IP', start: false },
    { id: 65, name: 'PI', start: false }
  ],
  links: [
    {
      name: 'a',
      source: { id: 46, name: 'PP' },
      target: { id: 48, name: 'IP' },
      curvature: 0.3
    },
    {
      name: 'b',
      source: { id: 46, name: 'PP' },
      target: { id: 65, name: 'PI' },
      curvature: 0.3
    },
    {
      name: 'b',
      source: { id: 65, name: 'PI' },
      target: { id: 46, name: 'PP' },
      curvature: 0.3
    },
    {
      name: 'a',
      source: { id: 48, name: 'IP' },
      target: { id: 46, name: 'PP' },
      curvature: 0.3
    },
    {
      name: 'b',
      source: { id: 48, name: 'IP' },
      target: { id: 55, name: 'II' },
      curvature: 0.3
    },
    {
      name: 'b',
      source: { id: 55, name: 'II' },
      target: { id: 48, name: 'IP' },
      curvature: 0.3
    },
    {
      name: 'a',
      source: { id: 55, name: 'II' },
      target: { id: 65, name: 'PI' },
      curvature: 0.3
    },
    {
      name: 'a',
      source: { id: 65, name: 'PI' },
      target: { id: 55, name: 'II' },
      curvature: 0.3
    }
  ]
};

export default OddAOddB;
