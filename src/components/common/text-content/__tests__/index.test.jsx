import React from 'react'
import renderer from 'react-test-renderer'

import Component from 'shinkansen-sprockets/components/common/text-content'

describe('shinkansen-sprockets/components/common/text-content', () => {
  describe('<Component />', () => {
    describe('With required props', () => {
      it('renders', () => {
        return expect(renderer.create(<Component textContent='MOCK TEXT CONTENT' />).toJSON())
          .toMatchSnapshot()
      })
    })
  })
})
