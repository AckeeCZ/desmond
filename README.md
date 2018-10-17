# Desmond

[![Build Status](https://api.travis-ci.com/AckeeCZ/desmond.svg?branch=master)](https://travis-ci.com/AckeeCZ/desmond)
[![Coverage Status](https://coveralls.io/repos/github/AckeeCZ/desmond/badge.svg?branch=master)](https://coveralls.io/github/AckeeCZ/desmond?branch=master)
[![Dependency Status](https://david-dm.org/AckeeCZ/desmond/status.svg)](https://david-dm.org/AckeeCZ/desmond)

Set of tools, functions and helpers for node back-end development.

## Install

TODO

## Contents

### Express
 - [`absoluteUrl`](./docs/README.md#const-absoluteurl)
 - ~~`fullUrlFromReq`~~ deprecated alias for `absoluteUrl`

### Hashing
 - [`compareBcrypt`](./docs/README.md#const-comparebcrypt)
 - ~~`createHash`~~ deprecated alias for `hash`
 - ~~`encodeBcrypt`~~ deprecated alias for `hashBcrypt`
 - [`hashBcrypt`](./docs/README.md#const-hashbcrypt)
 - [`hash`](./docs/README.md#const-hash)

### Database
 - [`snakelizeKeys`](./docs/README.md#const-snakelizekeys)
 - ~~`snakelize`~~ deprecated alias for `snakelizeKeys`
 - [`toJson`](./docs/README.md#const-tojson)
 - ~~`nullOrToJSON`~~ deprecated alias for `toJson`
 - [`tableColumns`](./docs/README.md#const-tablecolumns)
 - ~~`sqlColumnsListPromise`~~ deprecated alias for `tableColumns`
 - [`transacted`](./docs/README.md#const-transacted)

### Promises
 - [`promiseChain`](./docs/README.md#const-promisechain)
 - [`promisify`](./docs/README.md#promisify)
 - [`tap`](./docs/README.md#const-tap)

### Other
 - [`createDateWithMinutesFromNow`](./docs/README.md#const-createdatewithminutesfromnow)
 - [`parseBool`](./docs/README.md#const-parsebool)
 - ~~`toBoolean`~~ deprecated alias for `parseBool`
 - [`generateRandomAlphanumeric`](./docs/README.md#const-generaterandomalphanumeric)

## Development

### Building

 - `npm run build`

### Testing

 - `npm run test`
 - `npm run test:coverage`

### Lint

 - `npm run lint`

### Docs

 - `npm run docs`
 - Documentation is generated from the Typescript / JSDoc using Typedoc

## License

TODO
