interface IPreferences {
  exhibition: '2d' | '3d';
  link: {
    width: number;
    color: string;
    background: string;
    particles: boolean;
  };
  node: {
    color: string;
    background: string;
  };
}
