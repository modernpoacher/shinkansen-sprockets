const {
  expect // @ts-expect-error
} = require('chai')

const ErrorMessage = require('#sprockets/components/error-message')

describe('#sprockets/components/error-message', () => {
  describe('`ErrorMessage`', () => {
    it('is a function', () => {
      expect(ErrorMessage)
        .to.be.a('function')
    })
  })
})
