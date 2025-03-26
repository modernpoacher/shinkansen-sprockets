const {
  expect
} = require('chai')

const Description = require('#sprockets/components/description')

describe('#sprockets/components/description', () => {
  describe('`Description`', () => {
    it('is a function', () => {
      expect(Description)
        .to.be.a('function')
    })
  })
})
