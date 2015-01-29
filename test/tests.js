
var assert = require('assert')
var fs = require('fs')

var download = require('..');

before(function () {
  return download.cache.clear();
})

it('should download a video', function () {
  return download('https://archive.org/download/Windows7WildlifeSampleVideo/Wildlife_512kb.mp4').then(function (filename) {
    return fs.stat(filename);
  })
})

it('should download a video file again', function () {
  return download('https://archive.org/download/Windows7WildlifeSampleVideo/Wildlife_512kb.mp4').then(function (filename) {
    return fs.stat(filename);
  })
})

it('should throw on invalid URLs', function () {
  return download('klajsdlkfjaklsdjfasdf').then(function () {
    throw new Error('boom');
  }).catch(function (err) {
    assert(~err.message.indexOf('Invalid URL'));
  });
})

it.skip('should support encoded URIs', function () {
  return download(encodeURIComponent('https://archive.org/download/Windows7WildlifeSampleVideo/Wildlife_512kb.mp4')).then(function (filename) {
    return fs.stat(filename);
  })
})
