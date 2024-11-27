import React from 'react'
import renderer from 'react-test-renderer'

import classnames from 'classnames'

import Super from '#sprockets/components/title'
import Title from '#sprockets/sprockets/fieldset/title'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

describe('#sprockets/sprockets/fieldset/title', () => {
  describe('<Title />', () => {
    describe('With required props', () => {
      const component = (
        <Title />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          return expect(Title.prototype.getClassName)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        jest.spyOn(Title.prototype, 'hasTextContent').mockReturnValue(true)
        jest.spyOn(Title.prototype, 'getTextContent')
        jest.spyOn(Title.prototype, 'renderTextContent').mockReturnValue('MOCK RENDER CONTENT')

        const component = (
          <Title
            title='MOCK TITLE'
            onChange={jest.fn()}
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
          <Title />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        returnValue = instance.getClassName()
      })

      it('invokes `classnames`', () => {
        return expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'fieldset')
      })

      it('returns the classname', () => {
        return expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })
  })
})
