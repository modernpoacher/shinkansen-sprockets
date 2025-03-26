const {
  expect
} = require('chai')

const CheckAnswers = require('#sprockets/sprockets/error-summary')

describe('#sprockets/sprockets/error-summary', () => {
  describe('`CheckAnswers`', () => {
    it('is a function', () => {
      expect(CheckAnswers)
        .to.be.a('function')
    })
  })
})
