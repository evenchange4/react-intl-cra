# react-intl-cra

> Extract messages of `Creact React App` from the command line.

[![Travis][build-badge]][build] 
[![Codecov Status][codecov-badge]][codecov] 
[![npm package][npm-badge]][npm] 
[![npm downloads][npm-downloads]][npm] 
[![node][node]]()

[![Dependency Status][dependency-badge]][dependency]
[![devDependency Status][devDependency-badge]][devDependency]
[![peerDependency Status][peerDependency-badge]][peerDependency]

[![Greenkeeper badge][greenkeeper-badge]][greenkeeper]
[![prettier][prettier-badge]][prettier]
[![license][license-badge]][license]


This is just a workaround for [create-react-app #1227](https://github.com/facebookincubator/create-react-app/issues/1227#issuecomment-285738137) and [react-intl #869](https://github.com/yahoo/react-intl/issues/869) in unofficial way.

## Demo

Standalone example based on Create-React-App: https://github.com/evenchange4/react-intl-po-example

## Installation

```cmd
$ yarn add react-intl-cra --dev
```

## Usage

```json
$ react-intl-cra './src/**/*.js' './messages.json'
```

Output:

```json
// Output: messages.json

[
  {
    "id": "Account.account",
    "description": "Title",
    "defaultMessage": "帳戶",
    "filepath": "./src/containers/Account/messages.js"
  },
  {
    "id": "Account.myTestDevices",
    "defaultMessage": "我的測試裝置",
    "filepath": "./src/containers/Account/messages.js"
  },
  ...
]
```

## API

| **Arguments**        | **Description**                          |
| -------------------- | ---------------------------------------- |
| First - `srcPattern` | The pattern of React component files     |
| Second - `desPath`   | The output pathname of the `.json` file. |


## Development

### Requirements

-   node >= 9.3.0
-   yarn >= 1.3.2

```
$ yarn install --pure-lockfile
$ yarn start
```

### Test

```
$ yarn run format
$ yarn run eslint
$ yarn run flow
$ yarn run test:watch
```

### NPM Release

> Any git tags.

1.  Create a new git tag
2.  Update `CHANGELOG.md`

```console
$ npm version patch
$ npm run changelog
```

---

## CONTRIBUTING

* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.
* Pull requests must be accompanied by passing automated tests (`$ yarn test`).

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)

MIT: [http://michaelhsu.mit-license.org](http://michaelhsu.mit-license.org)

[build-badge]: https://img.shields.io/travis/evenchange4/react-intl-cra/master.svg?style=flat-square
[build]: https://travis-ci.org/evenchange4/react-intl-cra
[npm-badge]: https://img.shields.io/npm/v/react-intl-cra.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-intl-cra
[codecov-badge]: https://img.shields.io/codecov/c/github/evenchange4/react-intl-cra.svg?style=flat-square
[codecov]: https://codecov.io/github/evenchange4/react-intl-cra?branch=master
[node]: https://img.shields.io/node/v/react-intl-cra.svg?style=flat-square
[npm-downloads]: https://img.shields.io/npm/dt/react-intl-cra.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/react-intl-cra.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/
[dependency-badge]: https://david-dm.org/evenchange4/react-intl-cra.svg?style=flat-square
[dependency]: https://david-dm.org/evenchange4/react-intl-cra
[devDependency-badge]: https://david-dm.org/evenchange4/react-intl-cra/dev-status.svg?style=flat-square
[devDependency]: https://david-dm.org/evenchange4/react-intl-cra#info=devDependencies
[peerDependency-badge]: https://david-dm.org/evenchange4/react-intl-cra/peer-status.svg?style=flat-square
[peerDependency]: https://david-dm.org/evenchange4/react-intl-cra#info=peerDependencies
[greenkeeper-badge]: https://badges.greenkeeper.io/evenchange4/react-intl-cra.svg?style=flat-square
[greenkeeper]: https://greenkeeper.io/
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier
