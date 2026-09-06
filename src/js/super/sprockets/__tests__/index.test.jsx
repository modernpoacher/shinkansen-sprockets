/**
 *  @typedef {SprocketsTypes.Super.Sprockets.SprocketProps} SprocketProps
 */

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

import Sprocket from '#sprockets/super/sprockets'

jest.mock('classnames', () => jest.fn().mockReturnValue('MOCK CLASSNAME'))

describe('#sprockets/super/sprockets', () => {
  describe('<Sprocket />', () => {
    describe('With required props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: cog
          }
        } = render(
          <Sprocket />
        )

        expect(cog)
          .toBeInstanceOf(HTMLDivElement)
      })

      describe('Always', () => {
        /**
         *  @type {undefined | jest.SpyInstance}
         */
        let getClassNameSpy

        /**
         *  @type {undefined | jest.SpyInstance}
         */
        let renderTitleSpy

        /**
         *  @type {undefined | jest.SpyInstance}
         */
        let renderGroupSpy

        beforeEach(() => {
          getClassNameSpy = jest.spyOn(Sprocket.prototype, 'getClassName')

          renderTitleSpy = jest.spyOn(Sprocket.prototype, 'renderTitle')

          renderGroupSpy = jest.spyOn(Sprocket.prototype, 'renderGroup')

          render(
            <Sprocket />
          )
        })

        it('invokes `getClassName`', () => {
          expect(getClassNameSpy)
            .toHaveBeenCalled()
        })

        it('invokes `renderTitle`', () => {
          expect(renderTitleSpy)
            .toHaveBeenCalled()
        })

        it('invokes `renderGroup`', () => {
          expect(renderGroupSpy)
            .toHaveBeenCalled()
        })
      })

      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: sprocket
          }
        } = render(
          <Sprocket />
        )

        expect(snapshotOf(sprocket))
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: sprocket
          }
        } = render(
          <Sprocket
            title='MOCK TITLE'>
            MOCK CHILDREN
          </Sprocket>
        )

        expect(sprocket)
          .toBeInstanceOf(HTMLDivElement)
      })

      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: sprocket
          }
        } = render(
          <Sprocket
            title='MOCK TITLE'>
            MOCK CHILDREN
          </Sprocket>
        )

        expect(snapshotOf(sprocket))
          .toMatchSnapshot()
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      /**
       *  @type {undefined | Sprocket<SprocketProps>}
       */
      let instance

      beforeEach(() => {
        const {
          container
        } = render(
          <Sprocket
            title='MOCK TITLE'>
            MOCK CHILDREN
          </Sprocket>
        )

        instance = getInstanceFromContainerElement(container)
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

        describe('Prop `children` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              children: 'MOCK CHANGE CHILDREN'
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
          <Sprocket
            title='MOCK TITLE'>
            MOCK CHILDREN
          </Sprocket>
        )

        const instance = getInstanceFromContainerElement(container)

        expect(instance.getClassName())
          .toEqual(expect.any(String))
      })
    })

    describe('`renderGroup()`', () => {
      it('invokes `getId`', () => {
        const {
          container
        } = render(
          <Sprocket
            title='MOCK TITLE'>
            MOCK CHILDREN
          </Sprocket>
        )

        const instance = getInstanceFromContainerElement(container)

        /**
         *  Spy (and mock the return value)
         */
        const renderTitleSpy = jest.spyOn(instance, 'renderTitle').mockReturnValue('MOCK ID')

        instance.renderGroup()

        expect(renderTitleSpy)
          .toHaveBeenCalled()
      })
    })
  })
})
