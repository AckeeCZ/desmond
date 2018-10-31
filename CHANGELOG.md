# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.5] - 2018-10-29
### Added
- License to package.json
- Install and usage
- Travis GH Pages Typedoc publishing
- Microservice

### Fixed
- Typos
- Missing shared types when using the package with Typescript

### Changed
- Package description
- Use typedoc HTML docs

### Removed
- Markdown docs

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

[Unreleased]: https://github.com/AckeeCZ/desmond/compare/v0.2.5...HEAD
[0.2.5]: https://github.com/AckeeCZ/desmond/compare/v0.2.4...v0.2.5
[0.2.4]: https://github.com/AckeeCZ/desmond/compare/v0.2.3...v0.2.4
[0.2.3]: https://github.com/AckeeCZ/desmond/compare/v0.2.2...v0.2.3
[0.2.2]: https://github.com/AckeeCZ/desmond/compare/v0.2.1...v0.2.2
[0.2.1]: https://github.com/AckeeCZ/desmond/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/AckeeCZ/desmond/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/AckeeCZ/desmond/compare/d27f13b...v0.1.0
