const EndWithThreeAs = {
  nodes: [
    { id: 0, name: 'q0', start: true },
    { id: 1, name: 'q1', start: false },
    { id: 2, name: 'q2', start: false },
    { id: 3, name: 'q3', start: false, end: true }
  ],
  links: [
    { name: 'a', source: { id: 0, name: 'q0' }, target: { id: 1, name: 'q1' }, curvature: 0.3 },
    { name: 'a', source: { id: 1, name: 'q1' }, target: { id: 2, name: 'q2' } },
    { name: 'a', source: { id: 2, name: 'q2' }, target: { id: 3, name: 'q3' } },
    { name: 'b', source: { id: 1, name: 'q1' }, target: { id: 0, name: 'q0' }, curvature: 0.3 },
    { name: 'b', source: { id: 2, name: 'q2' }, target: { id: 0, name: 'q0' } },
    { name: 'b', source: { id: 3, name: 'q3' }, target: { id: 0, name: 'q0' } },
    { name: 'b', source: { id: 0, name: 'q0' }, target: { id: 0, name: 'q0' }, curvature: 0.8, rotation: 0.5235987755982988 },
    { name: 'a', source: { id: 3, name: 'q3' }, target: { id: 3, name: 'q3' }, curvature: 0.8, rotation: 0.5235987755982988 }
  ]
};

export default EndWithThreeAs;
