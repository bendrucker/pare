# pare [![Build Status](https://travis-ci.org/bendrucker/pare.svg?branch=master)](https://travis-ci.org/bendrucker/pare)

> Compare a function input against the previous input value


## Install

```
$ npm install --save pare
```


## Usage

```js
var compare = require('pare')
var fn = compare(function (a, b) {
  //=> null, 1
  //=> 1, 2   
})

fn(1)
fn(2)
```

## API

#### `compare(fn)` -> `function`

##### fn

*Required*  
Type: `function`

Returns a single-argument function wrapper around an inner comparison function (`fn`). 


## License

MIT © [Ben Drucker](http://bendrucker.me)
