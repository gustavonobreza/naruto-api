<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

API to fetch data about Naruto (and Boruto) anime and manga. With a short resume of history of life,  images and a table of more specific information of each character.

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
 
|   Path  	|     Source     	| Method 	|       Respose       	| Queries 	|
|:-------:	|:--------------:	|:------:	|:-------------------:	|:-------:	|
| /api/v1 	|   characters   	|   GET  	|    All characters   	|   soon  	|
| /api/v1 	| characters/:id 	|   GET  	| One character by id 	|    --   	|
| /api/v1 	|      clans     	|   GET  	|      All clans      	|   soon  	|
| /api/v1 	|    clans/:id   	|   GET  	|    One clan by id   	|    --   	|
| /api/v1 	|      bijus     	|   GET  	|      All bijus      	|    --   	|
