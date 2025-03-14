/**
 *  @typedef {SprocketsTypes.Sprockets.SprocketProps} SprocketProps
 */

import React from 'react'
import renderer from 'react-test-renderer'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import getInstanceFrom from 'react-component-instance/container'

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
        return expect(renderer.create(
          <Sprocket />
        ).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      it('matches the snapshot', () => {
        return expect(renderer.create(
          <Sprocket
            title='MOCK TITLE'>
            MOCK CHILDREN
          </Sprocket>
        ).toJSON())
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

        const instance = getInstanceFrom(container)

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

        const instance = getInstanceFrom(container)

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
