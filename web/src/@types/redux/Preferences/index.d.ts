interface IPreferences {
  exhibition: '2d' | '3d';
  link: {
    color: string;
    background: string;
    particles: boolean;
  };
  node: {
    color: string;
    background: string;
    autoAdjust: boolean;
  };
}
