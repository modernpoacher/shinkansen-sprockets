const {
  expect // @ts-expect-error
} = require('chai')

const Title = require('#sprockets/components/title')

describe('#sprockets/components/title', () => {
  describe('`Title`', () => {
    it('is a function', () => {
      expect(Title)
        .to.be.a('function')
    })
  })
})
