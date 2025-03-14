import React from 'react'
import snapshotOf from 'react-component-snapshot'
import renderer from 'react-test-renderer'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import VisuallyHiddenText from '#sprockets/components/common/visually-hidden-text'

describe('#sprockets/components/common/visually-hidden-text', () => {
  describe('<VisuallyHiddenText />', () => {
    it('renders', () => {
      const {
        container: {
          firstElementChild: visuallyHiddenText
        }
      } = render(
        <VisuallyHiddenText
          visuallyHiddenText='MOCK VISUALLY HIDDEN TEXT'
        />
      )

      expect(visuallyHiddenText)
        .toBeInstanceOf(HTMLSpanElement)
    })

    it('matches the snapshot', () => {
      const {
        container: {
          firstElementChild: visuallyHiddenText
        }
      } = render(
        <VisuallyHiddenText
          visuallyHiddenText='MOCK VISUALLY HIDDEN TEXT'
        />
      )

      expect(snapshotOf(visuallyHiddenText))
        .toMatchSnapshot()
    })

    /**
     *  @deprecated For migration toward Testing Library
     */
    xit('matches the snapshot', () => {
      expect(renderer.create(<VisuallyHiddenText visuallyHiddenText='MOCK VISUALLY HIDDEN TEXT' />).toJSON())
        .toMatchSnapshot()
    })
  })
})
