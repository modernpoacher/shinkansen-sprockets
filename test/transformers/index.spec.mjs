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
    it('is an object', () => {
      expect(checkAnswers)
        .to.be.an('object')
    })
  })

  describe('`common`', () => {
    it('is an object', () => {
      expect(common)
        .to.be.an('object')
    })
  })

  describe('`errorMessage`', () => {
    it('is an object', () => {
      expect(errorMessage)
        .to.be.an('object')
    })
  })

  describe('`errorSummary`', () => {
    it('is an object', () => {
      expect(errorSummary)
        .to.be.an('object')
    })
  })
})
