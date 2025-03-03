import {
  expect
} from 'chai'

import Sprocket from '#sprockets/super/sprockets'

describe('#sprockets/super/sprockets', () => {
  describe('`Sprocket`', () => {
    it('is a function', () => {
      expect(Sprocket)
        .to.be.a('function')
    })
  })
})
