# ukhaan-tukka [![Build Status](https://travis-ci.org/techgaun/ukhaan-tukka.svg?branch=master)](https://travis-ci.org/techgaun/ukhaan-tukka)

> Nepali ukhaan tukka


## Install

```
$ npm install --save ukhaan-tukka
```


## Usage

```js
const ukhaanTukka = require('ukhaan-tukka');

ukhaanTukka.ukhaan();
//=> 'घरको बाघ बनको स्याल!'

ukhaanTukka.ukhaans;
//=> All the ukhaan tukkas
```


## API

### .ukhaan()

Type: `string`

Returns single random ukhaan

### .ukhaans

Type: `array`

Returns all the ukhaans


## CLI


```
$ npm install -g ukhaan-tukka
```

```
$ ukhaan-tukka --help

  Random Nepali Ukhaan Tukka

  Examples
   $ ukhaan-tukka
 
   $ ukhaan-tukka --all

   Options
   --all   Get all ukhaan tukka instead of random single ukhaan
```

## License

MIT © [techgaun](http://samar.techgaun.com)
