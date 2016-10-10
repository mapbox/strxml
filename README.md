[![Build Status](https://travis-ci.org/mapbox/strxml.svg)](https://travis-ci.org/mapbox/strxml)

# strxml

Create xml with strings and concatenation.

## install

    npm install --save strxml

## api

* `tag(el, [attributes], contents)`
* `tagClose(el, attributes)`
* `encode(str)`
* `attr(attributes)`

## example

```js

var tag = require('strxml').tag;

tag('Layer',
    tag('StyleName', 'style-' + i) +
    tag('Datasource', {
      name: 'layer-' + i,
      srs: WGS84
    }));
```
