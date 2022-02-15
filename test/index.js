const test = require('tape').test
const vectors = require('hash-test-vectors')
const { base64 } = require('multiformats/bases/base64')

const RIPEMD160 = require('../')

vectors.forEach(function (vector, i) {
  const input = base64.baseDecode(vector.input)

  test('vector #' + (i + 1) + '', function (t) {
    t.same(new RIPEMD160().update(input).digest('hex'), vector.ripemd160)
    t.end()
  })
})

test('42', function (t) {
  t.same(new RIPEMD160().update('42').digest('hex'), '0df020ba32aa9b8b904471ff582ce6b579bf8bc8')
  t.end()
})
