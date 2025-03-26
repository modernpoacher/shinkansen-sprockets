const {
  expect
} = require('chai')

const Group = require('#sprockets/super/components/group')

describe('#sprockets/super/components/group', () => {
  describe('`Group`', () => {
    it('is a function', () => {
      expect(Group)
        .to.be.a('function')
    })
  })
})
