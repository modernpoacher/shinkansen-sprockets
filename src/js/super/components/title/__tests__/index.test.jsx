/**
 *  @typedef {SprocketsTypes.Super.Components.Title.TitleProps} TitleProps
 */

import React from 'react'
import {
  snapshotOf
} from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import getComponentInstanceFrom from 'react-component-instance/container'

import Title from '#sprockets/super/components/title'

describe('#sprockets/super/components/title', () => {
  describe('<Title />', () => {
    describe('With required props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: title
          }
        } = render(
          <Title />
        )

        expect(title)
          .toBeNull()
      })

      describe('Always', () => {
        it('invokes `getClassName`', () => {
          const getClassNameSpy = jest.spyOn(Title.prototype, 'getClassName')

          render(
            <Title />
          )

          expect(getClassNameSpy)
            .not.toHaveBeenCalled()
        })
      })

      /**
       *  Element is null
       */
      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: title
          }
        } = render(
          <Title />
        )

        expect(snapshotOf(title))
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: title
          }
        } = render(
          <Title
            title='MOCK TITLE'
          />
        )

        expect(title)
          .toBeInstanceOf(HTMLLegendElement)
      })

      describe('Always', () => {
        it('invokes `getClassName`', () => {
          const getClassNameSpy = jest.spyOn(Title.prototype, 'getClassName')

          render(
            <Title
              title='MOCK TITLE'
            />
          )

          expect(getClassNameSpy)
            .toHaveBeenCalled()
        })
      })

      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: title
          }
        } = render(
          <Title
            title='MOCK TITLE'
          />
        )

        expect(snapshotOf(title))
          .toMatchSnapshot()
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      /**
       *  @type {undefined | Component<TitleProps>}
       */
      let instance

      beforeEach(() => {
        const {
          container
        } = render(
          <Title
            title='MOCK TITLE'
          />
        )

        instance = getComponentInstanceFrom(container)
      })

      describe('`props` have changed', () => {
        describe('Prop `title` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              title: 'MOCK CHANGE TITLE'
            }))
              .toBe(true)
          })
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          expect(instance.shouldComponentUpdate({ // instance.props
            ...instance.props
          }))
            .toBe(false)
        })
      })
    })

    describe('`getClassName()`', () => {
      it('returns a string', () => {
        const {
          container
        } = render(
          <Title />
        )

        const instance = getComponentInstanceFrom(container)

        expect(instance.getClassName())
          .toEqual(expect.any(String))
      })
    })
  })
})
