const {
  expect // @ts-expect-error
} = require('chai')

const Group = require('#sprockets/components/group')

describe('#sprockets/components/group', () => {
  describe('`Group`', () => {
    it('is a function', () => {
      expect(Group)
        .to.be.a('function')
    })
  })
})
