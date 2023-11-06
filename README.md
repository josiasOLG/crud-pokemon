# CrudPokemon

# Instruções para Execução do Projeto

## Pré-requisitos

- Node.js versão v18.15.0
- Angular versão 13.3.11

## Configuração do Ambiente

Antes de iniciar o projeto, instale as dependências com o seguinte comando:

`npm install`

## Inicialização da API

Utilizamos o `json-server` para simular uma API REST. Inicie-o com o comando:

`npm run api:server`

## Executando o Projeto

Com a API rodando, inicie o projeto Angular com:

`npm start`

## Tecnologias Utilizadas

- **API de Pokémon TCG**: Para dados de cartas Pokémon.
- **Tailwind CSS**: Framework de UI para estilos.
- **Infragistics**: Biblioteca de UI com componentes ricos para Angular.
- **NgRx**: Biblioteca para gerenciamento de estado baseada em Redux.
- **Redux-Persist**: Para persistir o estado da aplicação entre as sessões.
- **EventEmitter**: Gerenciamento de eventos para comunicação entre componentes.

## Padrões de Projeto Adotados

- **Atomic Design**: Metodologia para criar sistemas de design.
- **SOLID**: Princípios de design orientado a objetos para melhor manutenção e extensibilidade do código.

## Notas Adicionais

- Certifique-se de seguir as melhores práticas e padrões avançados.
- A arquitetura do projeto foi cuidadosamente estruturada para permitir escalabilidade e manutenibilidade.

# Dependências do Projeto

Para instalar as dependências do projeto, execute os seguintes comandos:

```bash
# Instale o Ignite UI for Angular
npm install --save @igniteui/material-icons-extended@^2.10.0
npm install --save @igniteui-angular/core@^13.2.24
npm install --save @igniteui-angular/charts@^13.2.0

# Instale o NgRx para gerenciamento de estado
npm install --save @ngrx/store@^13.2.0
npm install --save @ngrx/store-devtools@^13.2.0
npm install --save ngrx-store-localstorage@^13.0.1

# Instale o ngx-cookie-service para gerenciar cookies
npm install --save ngx-cookie-service@^13.2.1

# Instale jszip para trabalhar com arquivos ZIP
npm install --save jszip@^3.7.1

```
