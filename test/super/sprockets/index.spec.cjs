const {
  expect
} = require('chai')

const Sprocket = require('#sprockets/super/sprockets')

describe('#sprockets/super/sprockets', () => {
  describe('`Sprocket`', () => {
    it('is a function', () => {
      expect(Sprocket)
        .to.be.a('function')
    })
  })
})
