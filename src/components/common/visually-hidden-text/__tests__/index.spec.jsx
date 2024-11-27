import React from 'react'
import renderer from 'react-test-renderer'

import Component from '#sprockets/components/common/visually-hidden-text'

describe('#sprockets/components/common/visually-hidden-text', () => {
  describe('<Component />', () => {
    describe('With required props', () => {
      it('renders', () => {
        return expect(renderer.create(<Component visuallyHiddenText='MOCK VISUALLY HIDDEN TEXT' />).toJSON())
          .toMatchSnapshot()
      })
    })
  })
})
