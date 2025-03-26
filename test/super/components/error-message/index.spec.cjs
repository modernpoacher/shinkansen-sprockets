const {
  expect
} = require('chai')

const ErrorMessage = require('#sprockets/super/components/error-message')

describe('#sprockets/super/components/error-message', () => {
  describe('`ErrorMessage`', () => {
    it('is a function', () => {
      expect(ErrorMessage)
        .to.be.a('function')
    })
  })
})
