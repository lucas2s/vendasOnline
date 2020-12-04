<h1 align="center" color="#6610f2">
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
<p>Serviço responsável pela criação de vendedores responsáveis por realizarem as vendas.</p>

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
