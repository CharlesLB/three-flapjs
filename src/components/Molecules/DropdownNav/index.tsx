import React from 'react';

import { Container } from './styles';

const DropdownNav: React.FC<INavigation> = ({ label, items }) => {
  return (
    <Container>
      <a>{label}</a>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.uri || '#'} onClick={item.onClick}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default DropdownNav;
