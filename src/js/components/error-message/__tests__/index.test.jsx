import React from 'react'

import {
  snapshotOf
} from 'react-component-snapshot'

import {
  getInstanceFromContainerElement
} from 'react-component-instance'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import ErrorMessage from '#sprockets/components/error-message'

const MOCK_ERROR_MESSAGE = {
  type: 'UNKNOWN',
  params: {
    expectedType: 'string'
  },
  uri: '#/'
}

describe('#sprockets/components/error-message', () => {
  describe('<ErrorMessage />', () => {
    describe('With required props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: errorMessage
          }
        } = render(
          <ErrorMessage />
        )

        expect(errorMessage)
          .toBeNull()
      })

      /**
       *  Element is null
       */
      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: errorMessage
          }
        } = render(
          <ErrorMessage />
        )

        expect(snapshotOf(errorMessage))
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: errorMessage
          }
        } = render(
          <ErrorMessage
            errorMessage={MOCK_ERROR_MESSAGE}
          />
        )

        expect(errorMessage)
          .toBeInstanceOf(HTMLSpanElement)
      })

      describe('Always', () => {
        it('invokes `getClassName`', () => {
          const getClassNameSpy = jest.spyOn(ErrorMessage.prototype, 'getClassName')

          render(
            <ErrorMessage
              errorMessage={MOCK_ERROR_MESSAGE}
            />
          )

          expect(getClassNameSpy)
            .toHaveBeenCalled()
        })
      })

      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: errorMessage
          }
        } = render(
          <ErrorMessage
            errorMessage={MOCK_ERROR_MESSAGE}
          />
        )

        expect(snapshotOf(errorMessage))
          .toMatchSnapshot()
      })
    })

    describe('`getClassName()`', () => {
      it('returns a string', () => {
        const {
          container
        } = render(
          <ErrorMessage
            errorMessage={MOCK_ERROR_MESSAGE}
          />
        )

        const instance = getInstanceFromContainerElement(container)

        expect(instance.getClassName())
          .toEqual(expect.any(String))
      })
    })
  })
})
