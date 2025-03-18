import React from 'react'
import snapshotOf from 'react-component-snapshot'

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
  })
})
