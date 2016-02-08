
# over

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Map a list of functions over a value

## Installation

    $ npm install @f/over

## Usage

```js
var over = require('@f/over')

over(4, [isEven, isOdd]) // -> [true, false]
```

## API

### over(value, fns)

- `value` - The value you want to pass to each function in `fns`
- `fns` - An array of functions you want to call with `value` as their first argument.

**Returns:** An array of the return value of each `fn(value)`.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/over.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/over
[git-image]: https://img.shields.io/github/tag/micro-js/over.svg
[git-url]: https://github.com/micro-js/over
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/over.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/over
