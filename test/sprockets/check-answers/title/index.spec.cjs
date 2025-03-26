const {
  expect
} = require('chai')

const Title = require('#sprockets/sprockets/check-answers/title')

describe('#sprockets/sprockets/check-answers/title', () => {
  describe('`Title`', () => {
    it('is a function', () => {
      expect(Title)
        .to.be.a('function')
    })
  })
})
