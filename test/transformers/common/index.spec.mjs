import {
  expect
} from 'chai'

import { getKey } from '#sprockets/transformers/common'

describe('#sprockets/transformers/common', () => {
  describe('`transform`', () => {
    it('is a function', () => {
      expect(getKey)
        .to.be.a('function')
    })
  })
})
