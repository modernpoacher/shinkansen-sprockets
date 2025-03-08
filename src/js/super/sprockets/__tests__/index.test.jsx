import React from 'react'
import renderer from 'react-test-renderer'

import classnames from 'classnames'

import Title from '#sprockets/super/components/title'
import Group from '#sprockets/super/components/group'

import Sprocket from '#sprockets/sprockets'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('#sprockets/super/components/title')
jest.mock('#sprockets/super/components/group')

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
      const component = (
        <Sprocket
          title='MOCK TITLE'
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
            title: 'MOCK CHANGE LEGEND'
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          return expect(instance.shouldComponentUpdate({ // instance.props
            title: 'MOCK TITLE'
          }))
            .toBe(false)
        })
      })
    })

    xdescribe('`renderTitle()`', () => {
      const component = (
        <Sprocket
          title='MOCK TITLE'
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
      const component = (
        <Sprocket
          title='MOCK TITLE'
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
            children: expect.any(Array)
          }, {})
      })
    })
  })
})
