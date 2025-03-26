const {
  expect
} = require('chai')

const Description = require('#sprockets/sprockets/fieldset/description')

describe('#sprockets/sprockets/fieldset/description', () => {
  describe('`Description`', () => {
    it('is a function', () => {
      expect(Description)
        .to.be.a('function')
    })
  })
})
