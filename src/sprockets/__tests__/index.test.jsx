import React from 'react'
import renderer from 'react-test-renderer'

import classnames from 'classnames'

import Title from '#sprockets/components/title'
import Group from '#sprockets/components/group'

import Sprocket from '#sprockets/sprockets'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('#sprockets/components/title')
jest.mock('#sprockets/components/group')

describe('#sprockets/sprockets', () => {
  describe('<Sprocket />', () => {
    describe('With required props', () => {
      const component = (
        <Sprocket title='MOCK TITLE' />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('Prototype', () => {
        describe('`getClassName`', () => {
          it('is defined', () => {
            return expect(Sprocket.prototype.getClassName)
              .toBeDefined()
          })
        })

        describe('`shouldComponentUpdate`', () => {
          it('is defined', () => {
            return expect(Sprocket.prototype.shouldComponentUpdate)
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
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Sprocket
            title='MOCK TITLE'
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getClassName()`', () => {
      beforeEach(() => {
        classnames.mockReset()
      })

      describe('With required props', () => {
        let returnValue

        beforeEach(() => {
          const component = (
            <Sprocket title='MOCK TITLE' />
          )

          const instance = (
            renderer.create(component)
              .getInstance()
          )

          returnValue = instance.getClassName()
        })

        it('does not invoke `classnames`', () => {
          return expect(classnames)
            .not.toBeCalled()
        })

        it('returns the classname', () => {
          return expect(returnValue)
            .toBe('sprocket')
        })
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const MOCK_ON_CHANGE = jest.fn()

      const component = (
        <Sprocket
          title='MOCK TITLE'
          onChange={MOCK_ON_CHANGE}
        />
      )

      let instance

      beforeEach(() => {
        instance = (
          renderer.create(component)
            .getInstance()
        )
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          return expect(instance.shouldComponentUpdate({
            title: 'MOCK CHANGE LEGEND',
            onChange: jest.fn()
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          return expect(instance.shouldComponentUpdate({ // instance.props
            title: 'MOCK TITLE',
            onChange: MOCK_ON_CHANGE
          }))
            .toBe(false)
        })
      })
    })

    xdescribe('`renderTitle()`', () => {
      const MOCK_ON_CHANGE = jest.fn()

      const component = (
        <Sprocket
          title='MOCK TITLE'
          onChange={MOCK_ON_CHANGE}
        />
      )

      let instance

      beforeEach(() => {
        // jest.clearAllMocks()

        instance = (
          renderer.create(component)
            .getInstance()
        )

        instance.renderTitle()
      })

      it('renders `<Title />`', () => {
        return expect(Title)
          .toBeCalledWith({
            title: 'MOCK TITLE'
          }, {})
      })
    })

    describe('`renderGroup()`', () => {
      const MOCK_ON_CHANGE = jest.fn()

      const component = (
        <Sprocket
          title='MOCK TITLE'
          onChange={MOCK_ON_CHANGE}
        />
      )

      let instance

      beforeEach(() => {
        // jest.clearAllMocks()

        instance = (
          renderer.create(component)
            .getInstance()
        )

        instance.renderGroup()
      })

      it('renders `<Group />`', () => {
        return expect(Group)
          .toBeCalledWith({
            onChange: MOCK_ON_CHANGE,
            children: expect.any(Array)
          }, {})
      })
    })
  })
})
