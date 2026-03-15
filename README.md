# Controle de Gastos Residenciais - Front-end

Aplicacao React com TypeScript responsÁvel pela interface do sistema de controle de gastos residenciais.

## Visao geral

Este projeto contÉm a camada web do sistema e consome uma Web API em .NET.
O objetivo do front e permitir:

- cadastro e listagem de pessoas
- cadastro e listagem de categorias
- cadastro e listagem de transacoes
- consulta de totais por pessoa
- consulta de totais por categoria

## Estrutura do projeto

O codigo foi separado para facilitar manutencao e leitura:

- `src/pages`: telas principais
- `src/components`: componentes visuais reutilizaveis
- `src/services`: chamadas para a API
- `src/types`: contratos tipados do front
- `src/hooks`: logica reutilizavel de estado e carregamento
- `src/utils`: formatacao e tratamento auxiliar

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- Bootstrap
- Axios

## Pre-requisitos

Antes de executar o projeto, voce precisa ter:

- Node.js 20+ instalado
- npm instalado
- Web API do projeto rodando localmente

## Instalacao

Dentro da pasta `front`, execute:

- npm i 
- npm run dev

Exemplo:

- `VITE_API_BASE_URL=https://sua-api-publica.exemplo.com/api`

## Tecnologias utilizadas
# Front-end
- React
- TypeScript
- Vite
- Bootstrap
- Axios

# Back-end
- .NET 10
- ASP.NET CORE Web API
- Dapper
- SQLite
- Scalar

