const {
  expect
} = require('chai')

const VisuallyHiddenText = require('#sprockets/components/common/visually-hidden-text')

describe('#sprockets/components/common/visually-hidden-text', () => {
  describe('`VisuallyHiddenText`', () => {
    it('is a function', () => {
      expect(VisuallyHiddenText)
        .to.be.a('function')
    })
  })
})
