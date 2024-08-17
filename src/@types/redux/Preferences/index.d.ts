interface IPreferences {
  exhibition: '2d' | '3d';
  timer: number;
  link: {
    color: string;
    background: string;
    particles: boolean;
    particlesSpeed: number;
    arrowLength: number;
    width: number;
  };
  node: {
    color: string;
    background: string;
    autoAdjust: boolean;
    size: number;
  };
}
