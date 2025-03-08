const {
  expect // @ts-expect-error
} = require('chai')

const Title = require('#sprockets/sprockets/fieldset/title')

describe('#sprockets/sprockets/fieldset/title', () => {
  describe('`Title`', () => {
    it('is a function', () => {
      expect(Title)
        .to.be.a('function')
    })
  })
})
