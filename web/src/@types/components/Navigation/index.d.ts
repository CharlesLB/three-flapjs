interface INavigation {
  label: string;
  items: INavigationItem[];
}

interface INavigationItem {
  label: string;
  onClick: () => void;
  uri?: AppConfig.github;
  target?: '_blank';
}
