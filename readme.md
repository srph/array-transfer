# array-transfer [![npm version](https://img.shields.io/npm/v/array-transfer.svg?style=flat-square)](https://npmjs.com/packages/array-transfer) [![Build Status](https://img.shields.io/travis/srph/array-transfer.svg?style=flat-square)](https://travis-ci.org/srph/array-transfer?branch=master)
Immutably transfer value from an array to another array

## Installation
```bash
npm i array-transfer --save
```

## Usage
```js
const transfer = require('array-transfer');
const {source, destination} = transfer(['rupee', 'doggie'], ['macky'], 1, 0);
console.log(source, destination) // ['rupee'], ['doggie', 'macky']
```

### Without ES6 destructuring
If you're within a project that doesn't use a transpiler like [Babel](https://babeljs.io), and would like to support legacy browsers, no worries!

```js
const set = transfer(['rupee', 'doggie'], ['macky'], 1, 0);
console.log(set.source, set.destination) // ['rupee'], ['doggie', 'macky']
```

### `transfer(src, dest, start, end)`
- `src` - The array where the value will be taken from
- `dest` - The array where the value will be transferred to
- `start` - Which index in `src` the value will be taken from
- `end` - Which index in `end` the value will be taken to

## Use case
This is a typical use case for Trello-like apps where you want to move a task from its original list to another list. You may also find this useful if you're dealing with tree nodes where you want to transfer a node to another parent.

## Running tests
```
npm test
```