# Backend Toolbag :handbag:

> The foreman lifted a lantern torch from the toolbag and descended the ladder.

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

### Other
 - [`createDateWithMinutesFromNow`](./docs/README.md#const-createdatewithminutesfromnow)
 - [`parseBool`](./docs/README.md#const-parsebool)
 - ~~`toBoolean`~~ deprecated alias for `parseBool`
 - [`generateRandomAfanumeric`](./docs/README.md#const-generaterandomafanumeric)

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
