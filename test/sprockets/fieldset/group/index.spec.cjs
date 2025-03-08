const {
  expect // @ts-expect-error
} = require('chai')

const Group = require('#sprockets/sprockets/fieldset/group')

describe('#sprockets/sprockets/fieldset/group', () => {
  describe('`Group`', () => {
    it('is a function', () => {
      expect(Group)
        .to.be.a('function')
    })
  })
})
