# Desmond

[![Build Status](https://img.shields.io/travis/com/AckeeCZ/desmond/master.svg?style=flat-square)](https://travis-ci.com/AckeeCZ/desmond)
[![Coverage Status](https://img.shields.io/coveralls/github/AckeeCZ/desmond.svg?style=flat-square)](https://coveralls.io/github/AckeeCZ/desmond?branch=master)
[![Dependency Status](https://img.shields.io/david/AckeeCZ/desmond.svg?style=flat-square)](https://david-dm.org/AckeeCZ/desmond)
[![Npm](https://img.shields.io/npm/v/desmond.svg?style=flat-square)](https://www.npmjs.com/package/desmond)
[![License](https://img.shields.io/github/license/AckeeCZ/desmond.svg?style=flat-square)](https://github.com/AckeeCZ/desmond/blob/master/LICENSE)

Desmond is a caretaker of boilerplate code for node back-end development, providing a set of maintained tools.

## Install

```shell
npm i --save desmond
```

## Usage
```ts
import { parseBool } from 'desmond'; // const { parseBool } = require('desmond');

parseBool('false');
```

Project features Typescript definitions! :yum:

To see what functions and tools are available, see the next section.

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

This project is licensed under [MIT](./LICENSE).
