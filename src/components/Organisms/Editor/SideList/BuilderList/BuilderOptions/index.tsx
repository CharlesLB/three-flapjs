import React from 'react';

import { Container, ListItem } from './styles';
import { IAutomatonStorageMode } from '@/@types/redux/AutomatonStorage';

interface Props {
  buildOptions: {
    label: string;
    items: {
      label: string;
      state: IAutomatonStorageMode;
    }[];
  }[];
  state: string;
  handleState: (state: IAutomatonStorageMode) => void;
  search: string;
}

const BuilderOptions: React.FC<Props> = ({ buildOptions, state, handleState, search }) => {
  const filteredOptions = buildOptions.map((option) => ({
    ...option,
    items: option.items.filter((item) => item.label.toLowerCase().includes(search.toLowerCase()))
  }));

  if (filteredOptions.every((option) => option.items.length === 0)) {
    return (
      <Container>
        <h3>No results</h3>
      </Container>
    );
  }

  return (
    <Container>
      {filteredOptions.map((option, index) => {
        if (option.items.length === 0) {
          return null;
        }

        return (
          <div key={index}>
            <h3>{option.label}</h3>
            <ul>
              {option.items.map((item, index) => (
                <ListItem active={state === item.state} key={index} onClick={() => handleState(item.state)}>
                  {item.label}
                </ListItem>
              ))}
            </ul>
          </div>
        );
      })}
    </Container>
  );
};

export default BuilderOptions;
