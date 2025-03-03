import {
  expect
} from 'chai'

import ErrorMessage from '#sprockets/components/error-message'

describe('#sprockets/components/error-message', () => {
  describe('`ErrorMessage`', () => {
    it('is a function', () => {
      expect(ErrorMessage)
        .to.be.a('function')
    })
  })
})
