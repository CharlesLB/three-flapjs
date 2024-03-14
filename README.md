# Three FlapJS

## Description

Three FlapJS is a website that allows the creation and manipulation of automata for formal languages. With this interactive tool, you can build, visualize, and test deterministic finite automata (DFAs) and non-deterministic finite automata (NFAs).

## Preview

[Three FlapJS Website](https://three-flapjs.vercel.app)

## Features

- Intuitive interface for creating and editing automata.
- Graphical visualization of automata.
- Testing of input string recognition with respect to automata.
- Support for deterministic and non-deterministic finite automata.

## Summary

- [Installation](#installation)
- [Usage](#usage)

## Installation

1. Clone the repository: `git clone [repository URL]`
2. Navigate to the project directory: `cd [project directory]`

### Web

3. Navigate to the web directory: `cd web`
4. Install dependencies: `yarn install`
5. Build the project: `yarn build`
6. Start the project: `yarn start`

### API

5. Navigate to the api directory: `cd api`
6. Install dependencies: `npm install`
7. Start the project: `npm start`

## To Do

Vou escrever em português para facilitar a comunicação.

- [ ] Criar um banco de dados que armazene os autômatos criados pelos usuários com um id de sessão.
  - Estava pensando em um sqlite, armazenando o id da sessão e o autômato em formato JSON. Só isso
- [ ] Adicionar no front a possibilidade de criar sessão
  - Aqui vai ter que criar um botão para copiar o link de convite
  - A criação da sessão vai criar um item no banco
  - A sessão será armazenada como GET param
  - Quando duas pessoas estiverem na mesma sessão, o autômato será compartilhado (ACHO que dá para testar em abas diferentes e depois testar em máquinas diferentes com a API no servidor)
- [ ] Cada alteração no autômato vai ser salva no banco

  - a cada alteração, altera o JSON no banco e manda apenas a nova alteração feita no autômato (acho que o google não altera todo o autômato toda vez que você faz uma alteração)

- [ ] Subir projeto
