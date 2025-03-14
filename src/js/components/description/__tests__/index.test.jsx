import React from 'react'
import snapshotOf from 'react-component-snapshot'
import renderer from 'react-test-renderer'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import getComponentInstanceFrom from 'react-component-instance/container'

import Description from '#sprockets/components/description'

describe('#sprockets/components/description', () => {
  describe('<Description />', () => {
    describe('With required props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: description
          }
        } = render(
          <Description />
        )

        expect(description)
          .toBeNull()
      })

      /**
       *  Element is null
       */
      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: description
          }
        } = render(
          <Description />
        )

        expect(snapshotOf(description))
          .toMatchSnapshot()
      })

      /**
       *  @deprecated For migration toward Testing Library
       */
      xit('matches the snapshot', () => {
        expect(renderer.create((
          <Description />
        )).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: description
          }
        } = render(
          <Description
            description='MOCK DESCRIPTION'
          />
        )

        expect(description)
          .toBeInstanceOf(HTMLSpanElement)
      })

      describe('Always', () => {
        it('invokes `getClassName`', () => {
          const getClassNameSpy = jest.spyOn(Description.prototype, 'getClassName')

          render(
            <Description
              description='MOCK DESCRIPTION'
            />
          )

          expect(getClassNameSpy)
            .toHaveBeenCalled()
        })
      })

      /**
       *  Element is null
       */
      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: description
          }
        } = render(
          <Description
            description='MOCK DESCRIPTION'
          />
        )

        expect(snapshotOf(description))
          .toMatchSnapshot()
      })

      /**
       *  @deprecated For migration toward Testing Library
       */
      xit('matches the snapshot', () => {
        expect(renderer.create((
          <Description
            description='MOCK DESCRIPTION'
          />
        )).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getClassName()`', () => {
      it('returns a string', () => {
        const {
          container
        } = render(
          <Description
            description='MOCK DESCRIPTION'
          />
        )

        const instance = getComponentInstanceFrom(container)

        expect(instance.getClassName())
          .toEqual(expect.any(String))
      })
    })
  })
})
