import {
  expect
} from 'chai'

import {
  checkAnswers,
  common,
  errorMessage,
  errorSummary
} from '#sprockets/transformers'

describe('#sprockets/transformers', () => {
  describe('`checkAnswers`', () => {
    it('is a function', () => {
      expect(checkAnswers)
        .to.be.a('module')
    })
  })

  describe('`common`', () => {
    it('is a function', () => {
      expect(common)
        .to.be.a('module')
    })
  })

  describe('`errorMessage`', () => {
    it('is a function', () => {
      expect(errorMessage)
        .to.be.a('module')
    })
  })

  describe('`errorSummary`', () => {
    it('is a function', () => {
      expect(errorSummary)
        .to.be.a('module')
    })
  })
})
