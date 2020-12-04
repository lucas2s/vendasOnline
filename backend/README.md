<h1 align="center">
  Projeto Vendas Online
</h1>
<br />
<p align="center">
  <a href="https://github.com/lucas2s?tab=followers">
    <img alt="GitHub Lucas Sartori" src="https://img.shields.io/github/followers/lucas2s?style=social">
  </a>

  <a href="https://github.com/lucas2s/fastfeetweb/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/lucas2s/vendasOnline?style=social">
  </a>
  <a href="https://github.com/lucas2s/fastfeetweb/forks/">
    <img alt="Stargazers" src="https://img.shields.io/github/forks/lucas2s/vendasOnline?style=social">
  </a>
  <a href="https://github.com/lucas2s/fastfeetweb/watchers">
    <img alt="watchers" src="https://img.shields.io/github/watchers/lucas2s/vendasOnline?style=social">
  </a>
</p>
<br />
<p align="center">
  <a href="#1---sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#2---tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#3---detalhes-dos-serviços">Detalhes dos Serviços</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#4---como-executar-a-aplicação">Como Executar a aplicação</a>
</p>

## 1 - Sobre o Projeto

<p>Neste projeto foi desenvolvido um backend com NodeJS que possibilita a realização de um cadastro de vendas.</p>

<h3>Extrutura do Projeto</h3>

A estrutura do projeto foi construida utilizando alguns conceitos de arquitetura de software e DDD.

```
├── ormconfig.json
├── out.txt
├── package.json
├── prettier.config.js
├── README.md
├── src
|  ├── config
|  ├── modules
|  |  └── sales
|  |     ├── dtos
|  |     |  ├── ICreateSalesDTO.ts
|  |     |  ├── ICreateSalespeopleDTO.ts
|  |     |  ├── IFindSalespeopleDTO.ts
|  |     |  ├── IListTopSalesDTO.ts
|  |     |  └── ISalespeopleDTO.ts
|  |     ├── infra
|  |     |  ├── http
|  |     |  |  ├── controllers
|  |     |  |  |  ├── SalesController.ts
|  |     |  |  |  └── SalespeopleController.ts
|  |     |  |  └── routes
|  |     |  |     ├── sales.routes.ts
|  |     |  |     └── salespeople.routes.ts
|  |     |  └── typeorm
|  |     |     ├── repositories
|  |     |     |  ├── SalespeopleRepository.ts
|  |     |     |  └── SalesRepository.ts
|  |     |     └── schemas
|  |     |        ├── Sales.ts
|  |     |        └── Salespeople.ts
|  |     ├── repositories
|  |     |  ├── ISalespeopleRepository.ts
|  |     |  └── ISalesRepository.ts
|  |     └── services
|  |        ├── CreateSalespeopleService.ts
|  |        ├── CreateSalesService.ts
|  |        ├── FindSalespeopleService.ts
|  |        └── ListTopSales.ts
|  └── shared
|     ├── container
|     |  └── index.ts
|     ├── errors
|     |  └── AppError.ts
|     └── infra
|        ├── http
|        |  ├── middlewares
|        |  |  └── handler.ts
|        |  ├── routes
|        |  |  └── index.ts
|        |  └── server.ts
|        └── typeorm
|           └── index.ts
├── tsconfig.json
├── yarn-error.log
└── yarn.lock
```

## 2 - Tecnologias

<p>O Projeto desenvolvido em NodeJS com utilização da linguagem Typescript e aplicação de diversas tecnologias e bibliotecas.</p>

- MongoDB - Banco de Dados
- TypeORM - Biblioteca de mapeamento Objeto Relacional
- date-fns - Biblioteca de manipulação de datas
- express - Criação de Serviços Rest
- yup - Biblioteca reponsável pela validação de dados.
- tsyringe - Injeção de dependências

Padronização de código

- prettier - Formatador de código
- eslint - Padronização de código
- editorconfig - Formatador de código

## 3 - Detalhes dos Serviços

<h3><strong>Criação de vendedores</strong></h3>
<p>Serviço responsável pela criação de vendedores responsáveis por realizarem as vendas.
Este serviço foi criado para possibilitar a criação de vendedores para que uma venda pudesse ser realizada com a utilização do ID do vendedor</p>

<p><strong>Método</strong></p>
<p>POST</p>
<p><strong>URL: </strong>/salespeople</p>
<p><strong>Resquest</strong></p>

<p>body</p>

```json
{
  "name": "Lucas Silva Sartori"
}
```

<p><strong>Reponse</strong></p>

```json
{
  "name": "Lucas Silva Sartori",
  "created_at": "2020-12-04T17:03:28.560Z",
  "updated_at": "2020-12-04T17:03:28.560Z",
  "id": "5fca6be0b51cc0339438ce43"
}
```

<h3><strong>Consulta vendedor</strong></h3>
<p>Serviço responsável pela consulta do vendedor através do ID do vendedor</p>

<p><strong>Método</strong></p>
<p>GET</p>
<p><strong>URL: </strong>/salespeople/:id</p>
<p><strong>Resquest</strong></p>

<p><strong>Reponse</strong></p>

```json
{
    "id": "5fc8696d37dd871638ae98c3",
    "name": "Claudio Fernando",
    "created_at": "2020-12-03T04:28:29.307Z",
    "updated_at": "2020-12-03T04:28:29.307Z"
}
```

<h3><strong>Criação de vendas</strong></h3>
<p>Serviço responsável por gerar uma venda.</p>

<p><strong>Método</strong></p>

`POST`

<p><strong>URL: </strong>/sales</p>
<p><strong>Resquest</strong></p>

<p>body</p>

```json
{
  "salespeopleId": "5fc9b156530b654b44786576",
  "salesDate": "2020-12-02T11:22:54-02:00",
  "value": 123.12
}
```

<p><strong>Reponse</strong></p>

```json
{
  "salespeople": {
    "salespeopleId": "5fc9b156530b654b44786576",
    "name": "Lucas Silva Sartori"
  },
  "value": "123.12",
  "sales_date": "2020-12-02T13:22:54.000Z",
  "created_at": "2020-12-04T17:18:50.952Z",
  "updated_at": "2020-12-04T17:18:50.952Z",
  "id": "5fca6f7ab51cc0339438ce44"
}
```

<h3><strong>Top 10 vendedores</strong></h3>
<p>Serviço responsável por retornar um ranking dos 10 melhores vendedores da semana com média de vendas diária.</p>
<p>O serviço também irá retornar a quantidade de vendas e o somatório do valor total das vendas.</p>
<p>No caso de empate do número total de vendas entre os vendedores, o critério de desempate é o valor total em vendas.</p>
<p>O relatório seleciona os vendedores a partir da data de entrada informada menos 7 dias.</p>

<p><strong>Método</strong></p>

`GET`

<p><strong>URL: </strong>/sales/rankingsalespeople?entryDate={entryDate}</p>
<p><strong>Resquest</strong></p>

<p>Query Parameters</p>

```
entryDate=2020-12-03T14:42:54-02:00
```

<p><strong>Reponse</strong></p>

```json
[
    {
        "salespeopleId": "5fc8695f37dd871638ae98c2",
        "name": "Fernanda de Oliveira",
        "totalSalesvalue": "R$ 1,103.30",
        "totalSales": "11",
        "dailyAverageSales": "1.571"
    },
    {
        "salespeopleId": "5fc8695637dd871638ae98c1",
        "name": "Luiz Claudio",
        "totalSalesvalue": "R$ 1,003.00",
        "totalSales": "10",
        "dailyAverageSales": "1.429"
    },
    {
        "salespeopleId": "5fca798d3238750594eafeda",
        "name": "Maria das Dores",
        "totalSalesvalue": "R$ 728.67",
        "totalSales": "9",
        "dailyAverageSales": "1.286"
    },
    (...)
]
```

## 3 - Como Executar a aplicação

:heavy_exclamation_mark: Obs: Deve-se ter instalado na máquina de teste a aplicação yarn e o banco de dados mongoDB. O mongoDB também pode ser utilizado através de uma imagem via docker.

:heavy_check_mark: O gerenciador de pacotes utilizado no projeto foi o yarn. <br />
:heavy_check_mark: Realizar um clone desse repositório. <br />
:heavy_check_mark: Entre na pasta backend dentro da pasta do projeto via linha de comando. <br />
:heavy_check_mark: Executar o comando yarn para instalar as dependências. <br />
:heavy_check_mark: Configurar no arquivo ormconfig.json dentro da pasta raiz os dados do mongoDB(HOST e PORT)<br />
:heavy_check_mark: Executar o comando yarn dev:server para iniciar o servidor da aplicação. <br />
:heavy_check_mark: Utiliza uma ferramenta objetivo testar serviços RESTful, como por exemplo Postman ou Insomnia <br />

