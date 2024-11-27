import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'

import classnames from 'classnames'

import Super from '#sprockets/sprockets'
import Sprocket from '#sprockets/sprockets/check-answers'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('#sprockets/sprockets/check-answers/title')
jest.mock('#sprockets/sprockets/check-answers/group', () => {
  class MockCog extends mockComponent {
    state = {}

    render () {
      return 'MOCK CHECK ANSWERS GROUP'
    }
  }

  return {
    __esModule: true,
    CheckCog: class CheckCog extends MockCog { },
    default: MockCog
  }
})

const MOCK_CHECK_ANSWERS = [
  {
    type: 'STRING',
    params: {
      answer: { title: 'MOCK STRING TITLE', value: 'MOCK STRING VALUE' },
      changeAnswer: { href: '#mock-string-change-href', text: 'MOCK STRING CHANGE TEXT', visuallyHiddenText: 'MOCK STRING VISUALLY HIDDEN TEXT' }
    }
  },
  {
    type: 'NUMBER',
    params: {
      answer: { title: 'MOCK NUMBER TITLE', value: 'MOCK NUMBER VALUE' },
      changeAnswer: { href: '#mock-number-change-href', text: 'MOCK NUMBER CHANGE TEXT', visuallyHiddenText: 'MOCK NUMBER VISUALLY HIDDEN TEXT' }
    }
  },
  {
    type: 'BOOLEAN',
    params: {
      answer: { title: 'MOCK BOOLEAN TITLE', value: 'MOCK BOOLEAN VALUE' },
      changeAnswer: { href: '#mock-boolean-change-href', text: 'MOCK BOOLEAN CHANGE TEXT', visuallyHiddenText: 'MOCK BOOLEAN VISUALLY HIDDEN TEXT' }
    }
  },
  {
    type: 'OBJECT',
    params: {
      answer: { title: 'MOCK OBJECT TITLE', value: 'MOCK OBJECT VALUE' },
      changeAnswer: { href: '#mock-object-change-href', text: 'MOCK OBJECT CHANGE TEXT', visuallyHiddenText: 'MOCK OBJECT VISUALLY HIDDEN TEXT' }
    }
  },
  {
    type: 'ARRAY',
    params: {
      answer: { title: 'MOCK ARRAY TITLE', value: 'MOCK ARRAY VALUE' },
      changeAnswer: { href: '#mock-array-change-href', text: 'MOCK ARRAY CHANGE TEXT', visuallyHiddenText: 'MOCK ARRAY VISUALLY HIDDEN TEXT' }
    }
  },
  {
    type: 'NULL',
    params: {
      answer: { title: 'MOCK NULL TITLE', value: 'MOCK NULL VALUE' },
      changeAnswer: { href: '#mock-null-change-href', text: 'MOCK NULL CHANGE TEXT', visuallyHiddenText: 'MOCK NULL VISUALLY HIDDEN TEXT' }
    }
  }
]

describe('#sprockets/sprockets/check-answers', () => {
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
            checkAnswers={MOCK_CHECK_ANSWERS}
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
          .toBeCalledWith('MOCK GETCLASSNAME', 'check-answers')
      })

      it('returns the classname', () => {
        return expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })
  })
})
