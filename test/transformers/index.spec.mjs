import {
  expect
} from 'chai'

import {
  errorMessage
} from '#sprockets/transformers'

describe('#sprockets/transformers', () => {
  describe('`errorMessage`', () => {
    it('is a function', () => {
      expect(errorMessage)
        .to.be.a('module')
    })
  })
})
