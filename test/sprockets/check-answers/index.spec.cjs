const {
  expect // @ts-expect-error
} = require('chai')

const CheckAnswers = require('#sprockets/sprockets/check-answers')

describe('#sprockets/sprockets/check-answers', () => {
  describe('`CheckAnswers`', () => {
    it('is a function', () => {
      expect(CheckAnswers)
        .to.be.a('function')
    })
  })
})
