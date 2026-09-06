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

import Sprocket from '#sprockets/sprockets'

jest.mock('classnames', () => jest.fn().mockReturnValue('MOCK CLASSNAME'))

describe('#sprockets/sprockets', () => {
  describe('<Sprocket />', () => {
    describe('With required props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: sprocket
          }
        } = render(
          <Sprocket />
        )

        expect(sprocket)
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
