
/**
 * For remote files, we want to download locally.
 * However, since we're most likely going to create track jobs on the same item,
 * we want to cache the files locally so avoid so many network requests.
 * This file caches all the remotes locally based on a hash of their path.
 */

var debug = require('debug')('download-cache');
var Promise = require('native-or-bluebird');
var request = require('requisition');
var validator = require('validator');
var Cache = require('fs-lru-cache');
var assert = require('http-assert');
var error = require('http-errors');
var crypto = require('crypto');

var cache = download.cache = Cache('download-cache');

var progress = Object.create(null);

module.exports = download;

/**
 * If the locally exists locally, use that.
 * Otherwise, download it and return the filename.
 * We cache by the sha of the URL.
 */

function download(url) {
  if (!validator.isURL(url)) return Promise.reject(error(400, 'Invalid URL: ' + url));
  // download in progress
  if (progress[sha]) return progress[sha];
  var sha = hash(url);
  return progress[sha] = cache.access(sha).then(function (filename) {
    if (filename) return filename;

    return request(url)
    .redirects(3)
    .agent(false)
    .then(function (response) {
      assert(response.status < 400, response.status, 'Got status code ' + response.status + ' from ' + url);
      assert(response.status === 200, 'Got status code ' + response.status + ' from ' + url);

      debug('Downloading %s -> %s', url, sha);

      return cache.copy(sha, response.response);
    });
  }).then(function (filename) {
    delete progress[sha];
    return filename;
  }, function (err) {
    delete progress[sha];
    throw err;
  });
}

function hash(path) {
  return crypto.createHash('sha256').update(path).digest('hex');
}
