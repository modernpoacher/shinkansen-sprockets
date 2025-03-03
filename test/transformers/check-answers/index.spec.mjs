import {
  expect
} from 'chai'

import transform from '#sprockets/transformers/check-answers'

describe('#sprockets/transformers/check-answers', () => {
  describe('`transform`', () => {
    it('is a function', () => {
      expect(transform)
        .to.be.a('function')
    })
  })
})
