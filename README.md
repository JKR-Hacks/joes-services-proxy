# Proxy Server that connects all services

>Enter http://localhost:3000/ in your browser to view all services on the proxy server.

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [Setup](#setup)
1. [Notes](#notes)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install -g nodemon
npm install
```
## Setup

```sh
Inside the root folder of each service:

To start the server: npm run server
To start webpack: npm run react

To seed the Schedule database: npm run seedschedule

To seed the Feed database: npm run seedfeed

To seed the Standings database: npm run seed

To seed the NavBar database: npm run seed

To seed the Stats database: npm run db:setup
                            npm run db:secondary

To seed the TeamLeaders database: npm run db:setup
                                  npm run db:secondary

```

## Notes
To view each service independently on their own servers:
```sh
Schedule          http://localhost:3001/
Standings         http://localhost:3002/
Feed              http://localhost:3003/
ScheduleSidebar   http://localhost:3004/
Stats             http://localhost:3005/
TeamLeaders       http://localhost:3006/
NavBar            http://localhost:3007/

Seed TeamLeaders before Stats.
```
To run updated jest tests
```sh
npm test -- -u
```
