const {
  expect
} = require('chai')

const Description = require('#sprockets/super/components/description')

describe('#sprockets/super/components/description', () => {
  describe('`Description`', () => {
    it('is a function', () => {
      expect(Description)
        .to.be.a('function')
    })
  })
})
