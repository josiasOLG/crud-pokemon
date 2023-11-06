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
# Instale as dependências principais do Angular
npm install --save @angular/animations@~13.3.0
npm install --save @angular/common@~13.3.0
npm install --save @angular/compiler@~13.3.0
npm install --save @angular/core@~13.3.0
npm install --save @angular/forms@~13.3.0
npm install --save @angular/platform-browser@~13.3.0
npm install --save @angular/platform-browser-dynamic@~13.3.0
npm install --save @angular/router@~13.3.0

# Instale o Ignite UI for Angular
npm install --save @igniteui/material-icons-extended@^2.10.0
npm install --save @igniteui-angular/core@^13.2.24
npm install --save @igniteui-angular/charts@^13.2.0

# Instale outras dependências
npm install --save hammerjs@^2.0.8
npm install --save minireset.css@~0.0.4
npm install --save rxjs@~7.5.0
npm install --save tslib@^2.3.0
npm install --save zone.js@~0.11.4

# Instale o NgRx para gerenciamento de estado
npm install --save @ngrx/store@^13.2.0
npm install --save @ngrx/store-devtools@^13.2.0
npm install --save ngrx-store-localstorage@^13.0.1

# Instale o ngx-cookie-service para gerenciar cookies
npm install --save ngx-cookie-service@^13.2.1

# Instale jszip para trabalhar com arquivos ZIP
npm install --save jszip@^3.7.1

# Instale as dependências de desenvolvimento
npm install --save-dev @angular-devkit/build-angular@~13.3.11
npm install --save-dev @angular/cli@~13.3.11
npm install --save-dev @angular/compiler-cli@~13.3.0
npm install --save-dev @compodoc/compodoc@^1.1.22
npm install --save-dev @igniteui/angular-schematics@~13.2.920
npm install --save-dev @tailwindcss/forms@^0.5.6
npm install --save-dev @types/hammerjs@^2.0.40
npm install --save-dev @types/jasmine@~3.10.0
npm install --save-dev @types/node@^12.11.1
npm install --save-dev @types/uuid@^9.0.6
npm install --save-dev autoprefixer@^10.4.16
npm install --save-dev jasmine-core@~4.0.0
npm install --save-dev json-server@^0.17.4
npm install --save-dev karma@~6.3.0
npm install --save-dev karma-chrome-launcher@~3.1.0
npm install --save-dev karma-coverage@~2.1.0
npm install --save-dev karma-jasmine@~4.0.0
npm install --save-dev karma-jasmine-html-reporter@~1.7.0
npm install --save-dev postcss@^8.4.31
npm install --save-dev sass@^1.69.5
npm install --save-dev tailwindcss@^3.3.5
npm install --save-dev typescript@~4.6.2
npm install --save-dev uuid@^9.0.1
```
