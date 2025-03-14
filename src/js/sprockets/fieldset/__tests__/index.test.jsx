import React from 'react'
import snapshotOf from 'react-component-snapshot'
import renderer from 'react-test-renderer'
import classnames from 'classnames'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import getComponentInstanceFrom from 'react-component-instance/container'

import Super from '#sprockets/sprockets'
import Sprocket from '#sprockets/sprockets/fieldset'

jest.mock('classnames', () => jest.fn().mockReturnValue('MOCK CLASSNAME'))

describe('#sprockets/sprockets/fieldset', () => {
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
            <Sprocket
              title='MOCK TITLE'
            />
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
          <Sprocket
            title='MOCK TITLE'>
            MOCK CHILDREN
          </Sprocket>
        )

        expect(snapshotOf(sprocket))
          .toMatchSnapshot()
      })

      /**
       *  @deprecated For migration toward Testing Library
       */
      xit('matches the snapshot', () => {
        const component = (
          <Sprocket
            title='MOCK TITLE'>
            MOCK CHILDREN
          </Sprocket>
        )

        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getClassName()`', () => {
      it('invokes `classnames`', () => {
        /**
         *  Ensure `super.getClassName()` returns a value
         */
        const getClassNameSpy = jest.spyOn(Super.prototype, 'getClassName').mockReturnValue('MOCK CLASSNAME')

        const {
          container
        } = render(
          <Sprocket />
        )

        const instance = getComponentInstanceFrom(container)

        /**
         *  Ensure it is reset after render
         */
        classnames.mockClear()

        /**
         *  Ensure it is reset after render
         */
        getClassNameSpy.mockClear()

        instance.getClassName()

        expect(classnames)
          .toHaveBeenCalledWith('MOCK CLASSNAME', { error: false }, 'fieldset')
      })
    })
  })
})
