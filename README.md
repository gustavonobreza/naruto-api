<p align="center">
  <a href="https://nodejs.org/en/" target="_blank"> <img alt="NodeJS" width="100px" src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/nodejs/nodejs-original.svg"/></a>
</p> 


## Description

API to fetch data about Naruto (and Boruto) anime and manga. With a short resume of history of life, images and a table of more specific information of each character.

## Deploy

It's deployed on: <a href="https://naruto-api.gustanobre.com.br" target="_blank" >https://naruto-api.gustanobre.com.br/</a>

## Links

### <a href="https://gustavonobreza.github.io/naruto-api/" target="_blank">Home Page</a>

### <a href="https://naruto-dex.vercel.app/" target="_blank">Frontend (DEMO)</a> / <a href="https://github.com/Gustavonobreza/narutodex" target="_blank">Frontend (REPO)</a>

### <a href="https://naruto-api-rsl3.onrender.com/" target="_blank">API / <a href="https://github.com/Gustavonobreza/naruto-api" target="_blank">API (REPO)</a>

## Installation

```bash
pnpm install
```

## Running the app

```bash
# start
$ pnpm start

# watch mode
$ pnpm start:dev

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

This app use from behind a json file generated using a crawler from **Narutopedia**. All the information is from there, photos (more information at [#Photos](https://github.com/gustavonobreza/naruto-api#Photos) ), articles, tables, and so on.

## Photos

When using the Narutopedia link, I was having some bugs so I downloaded all the photos and served using supabase.

## Paths

|  Path   |     Source     | Method |      Response       | Queries |
| :-----: | :------------: | :----: | :-----------------: | :-----: |
| /api/v1 |   characters   |  GET   |   All characters    |  soon   |
| /api/v1 | characters/:id |  GET   | One character by id |   --    |
| /api/v1 |     clans      |  GET   |      All clans      |  soon   |
| /api/v1 |   clans/:id    |  GET   |   One clan by id    |   --    |
| /api/v1 |     bijus      |  GET   |      All bijus      |   --    |

<br>
