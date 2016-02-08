/**
 * Modules
 */

var map = require('@f/map-array')
var upon = require('@f/upon')

/**
 * Expose over
 */

module.exports = over

/**
 * over
 */

function over (value, fns) {
  return map(upon(value), fns)
}
