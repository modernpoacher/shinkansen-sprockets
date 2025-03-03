import {
  expect
} from 'chai'

import VisuallyHiddenText from '#sprockets/components/common/visually-hidden-text'

describe('#sprockets/components/common/visually-hidden-text', () => {
  describe('`VisuallyHiddenText`', () => {
    it('is a function', () => {
      expect(VisuallyHiddenText)
        .to.be.a('function')
    })
  })
})
