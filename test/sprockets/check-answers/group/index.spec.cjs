const {
  expect // @ts-expect-error
} = require('chai')

const Group = require('#sprockets/sprockets/check-answers/group')

describe('#sprockets/sprockets/check-answers/group', () => {
  describe('`Group`', () => {
    it('is a function', () => {
      expect(Group)
        .to.be.a('function')
    })
  })
})
