<p align="center">
  <a href="https://nodejs.org/en/" target="_blank"> <img alt="NodeJS" width="100px" src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/nodejs/nodejs-original.svg"/></a>
 <a target="_blank" href="https://nestjs.com/" target="_blank"> <img alt="NestJS" width="100px" src="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg" /></a>
  <a target="_blank" href="https://www.typescriptlang.org/" target="_blank"> <img alt="TypeScript" width="100px" src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/typescript/typescript-original.svg"/></a>
  <a href="https://www.heroku.com" target="_blank"> <img alt="Heroku" width="100px" src="https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/heroku/heroku-plain.svg"/></a>
</p>

<p align="center">
    <img src="https://ci.appveyor.com/api/projects/status/github/gustavonobreza/naruto-api?svg=true" alt="Build status: Passing" />
  <a href="https://github.com/gustavonobreza/naruto-api/actions" alt="Build status: Passing">
    <img src="https://github.com/gustavonobreza/naruto-api/actions/workflows/node.js.yml/badge.svg" alt="Build status: Passing">
  </a>
  <img src="https://heroku-badge.herokuapp.com/?app=naruto-api" alt="Deploy status: OK"/>
</p>

## Description

API to fetch data about Naruto (and Boruto) anime and manga. With a short resume of history of life, images and a table of more specific information of each character.

## Deploy

It's deployed on Heroku: <a href="https://naruto-api.herokuapp.com/" target="_blank" >https://naruto-api.herokuapp.com/</a>

## Links

### <a href="https://gustavonobreza.github.io/naruto-api/" target="_blank">Home Page</a>

### <a href="https://naruto-dex.vercel.app/" target="_blank">Frontend (DEMO)</a> / <a href="https://github.com/Gustavonobreza/narutodex" target="_blank">Frontend (REPO)</a>

### <a href="https://naruto-api.herokuapp.com/" target="_blank">API / <a href="https://github.com/Gustavonobreza/naruto-api" target="_blank">API (REPO)</a>

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm start

# watch mode
$ pnpm start:dev

# production mode
$ pnpm start:prod
```

## Test

```bash
# unit tests
$ pnpm test

# e2e tests
$ pnpm test:e2e

# test coverage
$ pnpm test:cov
```

## Source

This app use from behind a json file generated using a crawler from **Narutopedia**. All the information is from there, photos (more information at [#Photos](/#Photos) ), articles, tables, and so on.

## Photos

When using the Narutopedia link, I was having some bugs so I downloaded all the photos and served using supabase.

## Paths

|  Path   |     Source     | Method |       Respose       | Queries |
| :-----: | :------------: | :----: | :-----------------: | :-----: |
| /api/v1 |   characters   |  GET   |   All characters    |  soon   |
| /api/v1 | characters/:id |  GET   | One character by id |   --    |
| /api/v1 |     clans      |  GET   |      All clans      |  soon   |
| /api/v1 |   clans/:id    |  GET   |   One clan by id    |   --    |
| /api/v1 |     bijus      |  GET   |      All bijus      |   --    |

<br>
