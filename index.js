'use strict'

module.exports = function Comparator (fn) {
  var previous = null
  return function compare (current) {
    fn(previous, current)
    previous = current
  }
}
