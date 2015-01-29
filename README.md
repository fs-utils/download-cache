
# download-cache

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
[![Gittip][gittip-image]][gittip-url]

```js
var download = require('download-cache');

download('https://archive.org/download/Windows7WildlifeSampleVideo/Wildlife_512kb.mp4').then(function (filename) {
  fs.stat(filename);
});
```

[gitter-image]: https://badges.gitter.im/fs-utils/download-cache.png
[gitter-url]: https://gitter.im/fs-utils/download-cache
[npm-image]: https://img.shields.io/npm/v/download-cache.svg?style=flat-square
[npm-url]: https://npmjs.org/package/download-cache
[github-tag]: http://img.shields.io/github/tag/fs-utils/download-cache.svg?style=flat-square
[github-url]: https://github.com/fs-utils/download-cache/tags
[travis-image]: https://img.shields.io/travis/fs-utils/download-cache.svg?style=flat-square
[travis-url]: https://travis-ci.org/fs-utils/download-cache
[coveralls-image]: https://img.shields.io/coveralls/fs-utils/download-cache.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/fs-utils/download-cache
[david-image]: http://img.shields.io/david/fs-utils/download-cache.svg?style=flat-square
[david-url]: https://david-dm.org/fs-utils/download-cache
[license-image]: http://img.shields.io/npm/l/download-cache.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/download-cache.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/download-cache
[gittip-image]: https://img.shields.io/gratipay/jonathanong.svg?style=flat-square
[gittip-url]: https://gratipay.com/jonathanong/
