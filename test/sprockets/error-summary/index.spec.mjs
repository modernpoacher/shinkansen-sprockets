import {
  expect
} from 'chai'

import CheckAnswers from '#sprockets/sprockets/error-summary'

describe('#sprockets/sprockets/error-summary', () => {
  describe('`CheckAnswers`', () => {
    it('is a function', () => {
      expect(CheckAnswers)
        .to.be.a('function')
    })
  })
})
