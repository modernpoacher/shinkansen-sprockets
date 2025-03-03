import {
  expect
} from 'chai'

import {
  CheckAnswersSprocket,
  ErrorSummarySprocket,
  FieldsetSprocket
} from '#sprockets'

describe('#sprockets', () => {
  describe('`CheckAnswersSprocket`', () => {
    it('is a function', () => {
      expect(CheckAnswersSprocket)
        .to.be.a('function')
    })
  })

  describe('`ErrorSummarySprocket`', () => {
    it('is a function', () => {
      expect(ErrorSummarySprocket)
        .to.be.a('function')
    })
  })

  describe('`FieldsetSprocket`', () => {
    it('is a function', () => {
      expect(FieldsetSprocket)
        .to.be.a('function')
    })
  })
})
