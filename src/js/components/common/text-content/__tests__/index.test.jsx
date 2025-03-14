import React from 'react'
import renderer from 'react-test-renderer'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import TextContent from '#sprockets/components/common/text-content'

describe('#sprockets/components/common/text-content', () => {
  describe('<TextContent />', () => {
    it('renders', () => {
      const {
        container: {
          firstElementChild: textContent
        }
      } = render(
        <TextContent textContent='MOCK TEXT CONTENT' />
      )

      expect(textContent)
        .toBeInstanceOf(HTMLSpanElement)
    })

    it('matches the snapshot', () => {
      expect(renderer.create(<TextContent textContent='MOCK TEXT CONTENT' />).toJSON())
        .toMatchSnapshot()
    })
  })
})
