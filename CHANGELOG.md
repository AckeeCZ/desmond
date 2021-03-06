# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.5.6] - 2019-04-29
### Added
- Specify Node 10 in engines

### Fixed
- Microservice options

## [0.5.5] - 2019-03-20
### Added
- PATCH for Microservice
- general HTTP method call for Microservice

## [0.5.4] - 2019-02-18
### Added
- Headers logging for Microservice

### Fixed
- Lint-staged find related tests option

### Changed
- Replace pretty-quick with lint-staged
- Update coding style rules

## [0.5.3] - 2019-02-05
### Fixed
- #24 via update of internal naive object validator

## [0.5.2] - 2019-01-22
### Changed
- Microservice updated to be more modular and have modifiable attributes

## [0.5.1] - 2019-01-17
### Fixed
- Updated npm deploy token
- Updated prettier config
- Pretty ignore changelog, because it breaks keep-a-changelog format

## [0.5.0] - 2019-01-17
### Added
- prettier
- husky
- seedRun

### Changed
- upgraded tslint-config
- Make all tests use main exports
- Use native types for knex and bookshelf
- User overwrite for pipe types

### Fixed
- #15
- #14

### Removed
- createDateWithMinutesFromNow
- deprecated aliases fullUrlFromReq, createHash, encodeBcrypt, nullOrToJSON, sqlColumnsListPromise, toBoolean

## [0.4.0] - 2018-12-10
### Added
- Pipe to readme

### Changed
- Pipe can now handle any number of provided functions, validating the chain of arguments, without explicit enumeration

## [0.3.0] - 2018-11-14
### Added
- Travis GH Pages Typedoc publishing
- Microservice
- pipe

### Changed
- Use typedoc HTML docs
- `snakelize` un-deprecated, improved and generalized

### Fixed
- `snakelize` to handle strings and dot composed strings

### Removed
- Markdown docs
- `snakelizeKeys` function

## [0.2.5] - 2018-10-29
### Added
- License to package.json
- Install and usage

### Fixed
- Typos
- Missing shared types when using the package with Typescript

### Changed
- Package description

## [0.2.4] - 2018-10-19
### Fixed
- Travis npm token ([com issue](https://github.com/travis-ci/travis-ci/issues/9403))

## [0.2.3] - 2018-10-19
### Fixed
- Travis npm token

## [0.2.2] - 2018-10-19
### Changed
- Skip cleanup on travis (to preserve build)

## [0.2.1] - 2018-10-19
### Fixed
- Node version in engines

### Changed
- npmignore changelog and config files

### Removed
- redundant build in ts-jest

## [0.2.0] - 2018-10-19
### Added
- npm prepare
- .npmignore
- travis deploy

## [0.1.0] - 2018-10-17
### Added
- `toJson` function
- Markdown docs generation using typedoc
- `absoluteUrl` function
- `hash` function
- `parseBool` function
- `snakelizeKeys` function
- `hashBcrypt`, `compareBcrypt` functions
- `generateRandomAlphanumeric` function
- `transacted` function
- `tableColumns` function
- function aliases
- `deprecated` wrapper
- main file
- `promiseChain` function
- `promisify` function
- `tap` function

### Changed
- use `ts-jest` instead of `jest`

### Removed
- `conf.json`
- `jsconfig.json`

[Unreleased]: https://github.com/AckeeCZ/desmond/compare/v0.5.6...HEAD
[0.5.6]: https://github.com/AckeeCZ/desmond/compare/v0.5.5...v0.5.6
[0.5.5]: https://github.com/AckeeCZ/desmond/compare/v0.5.4...v0.5.5
[0.5.4]: https://github.com/AckeeCZ/desmond/compare/v0.5.3...v0.5.4
[0.5.3]: https://github.com/AckeeCZ/desmond/compare/v0.5.2...v0.5.3
[0.5.2]: https://github.com/AckeeCZ/desmond/compare/v0.5.1...v0.5.2
[0.5.1]: https://github.com/AckeeCZ/desmond/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/AckeeCZ/desmond/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/AckeeCZ/desmond/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/AckeeCZ/desmond/compare/v0.2.5...v0.3.0
[0.2.5]: https://github.com/AckeeCZ/desmond/compare/v0.2.4...v0.2.5
[0.2.4]: https://github.com/AckeeCZ/desmond/compare/v0.2.3...v0.2.4
[0.2.3]: https://github.com/AckeeCZ/desmond/compare/v0.2.2...v0.2.3
[0.2.2]: https://github.com/AckeeCZ/desmond/compare/v0.2.1...v0.2.2
[0.2.1]: https://github.com/AckeeCZ/desmond/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/AckeeCZ/desmond/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/AckeeCZ/desmond/compare/d27f13b...v0.1.0
