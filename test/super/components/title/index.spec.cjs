const {
  expect
} = require('chai')

const Title = require('#sprockets/super/components/title')

describe('#sprockets/super/components/title', () => {
  describe('`Title`', () => {
    it('is a function', () => {
      expect(Title)
        .to.be.a('function')
    })
  })
})
