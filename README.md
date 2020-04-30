<div align="center">

![Desmond](https://i.imgur.com/SPO2gD7.png)
[![Build Status](https://img.shields.io/travis/com/AckeeCZ/desmond/master.svg?style=flat-square)](https://travis-ci.com/AckeeCZ/desmond)
[![Npm](https://img.shields.io/npm/v/desmond.svg?style=flat-square)](https://www.npmjs.com/package/desmond)
[![License](https://img.shields.io/github/license/AckeeCZ/desmond.svg?style=flat-square)](https://github.com/AckeeCZ/desmond/blob/master/LICENSE)

Desmond is a caretaker of boilerplate code for node back-end development, providing a set of maintained tools.
</div>

<div align="center">

## DEPRECATION NOTICE

![](https://media.giphy.com/media/LyyD3b2vTQUBW/giphy.gif)
</div>


Until further notice this package is depreciated and no longer maintained. Here is a list of viable alternatives:

- `absoluteUrl` - Common, you have never even used that anyway. But if you're being serious, use this [oneliner](https://stackoverflow.com/a/10185427/4425335)
- `compareBcrypt`, `hashBcrypt` - Use [`bcrypt`](https://www.npmjs.com/package/bcrypt) directly, if you need it, but most of the time you will probably custom or third party service and not need helper on each service
- `hash` - Use Node API directly
- `attributes` - Use new [databless](https://github.com/AckeeCZ/databless) `deserialize` functions instead
- `snakelize` - Use [knex-stringcase](https://www.npmjs.com/package/knex-stringcase) instead, don't modify fields manually
- `toJson`, `tableColumns` - Use [databless](https://github.com/AckeeCZ/databless)' repository API and don't tamper with models directly
- `transacted` - Use native knex API, generally transactions are not widely used
- `promisify` - Use node utils implementation
- `tap` - Use lodash/ramda/custom implementation
- `Microservice` - Use [got](https://www.npmjs.com/package/got)'s `extend`
- `generateRandomAlphanumeric` - [`uuid`](https://www.npmjs.com/package/uuid) is better option for most cases
- `parseBool` - This is actually not half bad, if you need it, see the [implementation](https://github.com/AckeeCZ/desmond/blob/e3e9289a0b22b55ac1ddb90a841f1088b926b48d/src/lib/parseBool.ts)
- `promiseChain` - Ditto, see [implementation](https://github.com/AckeeCZ/desmond/blob/c165042fdd527a2e15e2d26275df67f3e55e58df/src/lib/promiseChain.ts)

## License

This project is licensed under [MIT](./LICENSE).
