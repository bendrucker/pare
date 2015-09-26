'use strict'

var test = require('tape')
var compare = require('./')

test(function (t) {
  t.plan(4)

  var wrapped = compare(fn)
  var i = 0
  wrapped(1)
  wrapped(2)

  function fn (a, b) {
    if (!i) {
      t.equal(a, null)
      t.equal(b, 1)
      return i++
    }

    t.equal(a, 1)
    t.equal(b, 2)
  }
})
