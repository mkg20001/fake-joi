'use strict'

const assert = require('assert').strict
const Joi = require('..')

/* eslint-env mocha */

describe('fake-joi', () => {
  it('should convert to string', async () => {
    assert.strictEqual(Joi.object()._, 'Joi.object()')
  })

  it('should convert to string with subobjects', async () => {
    assert.strictEqual(Joi.object({ someKey: Joi.number().integer().required() })._, 'Joi.object({"someKey": Joi.number().integer().required()})')
  })
})
