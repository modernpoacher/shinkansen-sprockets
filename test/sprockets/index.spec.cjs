const {
  expect // @ts-expect-error
} = require('chai')

const Sprocket = require('#sprockets/sprockets')

describe('#sprockets/sprockets', () => {
  describe('`Sprocket`', () => {
    it('is a function', () => {
      expect(Sprocket)
        .to.be.a('function')
    })
  })
})
