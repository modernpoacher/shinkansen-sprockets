import React from 'react'
import renderer from 'react-test-renderer'

import classnames from 'classnames'

import Super from '@modernpoacher/sprockets/sprockets'
import Sprocket from '../index.jsx'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('../title/index.jsx')
jest.mock('../group/index.jsx')

describe('@modernpoacher/sprockets/sprockets/error-summary', () => {
  describe('<Sprocket />', () => {
    describe('With required props', () => {
      const component = (
        <Sprocket />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          return expect(Sprocket.prototype.getClassName)
            .toBeDefined()
        })
      })

      describe('`renderTitle`', () => {
        it('is defined', () => {
          return expect(Sprocket.prototype.renderTitle)
            .toBeDefined()
        })
      })

      describe('`renderGroup`', () => {
        it('is defined', () => {
          return expect(Sprocket.prototype.renderGroup)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Sprocket
            title='MOCK TITLE'
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getClassName()`', () => {
      let returnValue

      beforeEach(() => {
        jest.spyOn(Super.prototype, 'getClassName').mockReturnValue('MOCK GETCLASSNAME')

        const component = (
          <Sprocket />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        returnValue = instance.getClassName()
      })

      it('invokes `classnames`', () => {
        return expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'error-summary')
      })

      it('returns the classname', () => {
        return expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })
  })
})
