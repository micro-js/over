/**
 * Imports
 */

var over = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(over(4, [isEven, isOdd]), [true, false])
  t.end()
})

/**
 * Helpers
 */

function isEven (n) {
  return n % 2 === 0
}

function isOdd (n) {
  return !isEven(n)
}
