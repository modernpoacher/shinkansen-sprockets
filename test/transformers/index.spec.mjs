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
        .to.be.an('object')
    })
  })

  describe('`common`', () => {
    it('is a function', () => {
      expect(common)
        .to.be.an('object')
    })
  })

  describe('`errorMessage`', () => {
    it('is a function', () => {
      expect(errorMessage)
        .to.be.an('object')
    })
  })

  describe('`errorSummary`', () => {
    it('is a function', () => {
      expect(errorSummary)
        .to.be.an('object')
    })
  })
})
