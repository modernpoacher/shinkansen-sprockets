const {
  expect
} = require('chai')

const TextContent = require('#sprockets/components/common/text-content')

describe('#sprockets/components/common/text-content', () => {
  describe('`TextContent`', () => {
    it('is a function', () => {
      expect(TextContent)
        .to.be.a('function')
    })
  })
})
