# rollup-plugin-fecs [![Build Status](https://travis-ci.org/SidKwok/rollup-plugin-fecs.svg?branch=master)](https://travis-ci.org/SidKwok/rollup-plugin-fecs)
Rollup plugin to verify entry point and all imported files with fecs.

## Install
---
```
npm install rollup-plugin-fecs
```

## Usage
---
```
import { rollup } from 'rollup';
import fecs from 'rollup-plugin-fecs';

rollup({
    entry: 'main.js',
    plugins: [
        fecs({ /* your options */ })
    ]
});
```

## Options
---
See more options here [fecs](https://github.com/ecomfe/fecs/).
