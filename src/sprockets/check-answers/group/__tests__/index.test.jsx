import React from 'react'
import renderer from 'react-test-renderer'

import classnames from 'classnames'

import Super from 'shinkansen-sprockets/components/group'
import Group from 'shinkansen-sprockets/sprockets/check-answers/group'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('shinkansen-sprockets/sprockets/check-answers/group/answer-title', () => () => 'MOCK ANSWER TITLE')
jest.mock('shinkansen-sprockets/sprockets/check-answers/group/answer-value', () => () => 'MOCK ANSWER VALUE')
jest.mock('shinkansen-sprockets/sprockets/check-answers/group/change-answer', () => () => 'MOCK CHANGE ANSWER')

const MOCK_STRING_ANSWER = {
  type: 'STRING',
  params: {
    answer: { title: 'MOCK STRING TITLE', value: 'MOCK STRING VALUE' },
    changeAnswer: { href: 'MOCK STRING CHANGE HREF', text: 'MOCK STRING CHANGE TEXT', visuallyHiddenText: 'MOCK STRING VISUALLY HIDDEN TEXT' }
  }
}

const MOCK_NUMBER_ANSWER = {
  type: 'NUMBER',
  params: {
    answer: { title: 'MOCK NUMBER TITLE', value: 'MOCK NUMBER VALUE' },
    changeAnswer: { href: 'MOCK NUMBER CHANGE HREF', text: 'MOCK NUMBER CHANGE TEXT', visuallyHiddenText: 'MOCK NUMBER VISUALLY HIDDEN TEXT' }
  }
}

const MOCK_BOOLEAN_ANSWER = {
  type: 'BOOLEAN',
  params: {
    answer: { title: 'MOCK BOOLEAN TITLE', value: 'MOCK BOOLEAN VALUE' },
    changeAnswer: { href: 'MOCK BOOLEAN CHANGE HREF', text: 'MOCK BOOLEAN CHANGE TEXT', visuallyHiddenText: 'MOCK BOOLEAN VISUALLY HIDDEN TEXT' }
  }
}

const MOCK_NULL_ANSWER = {
  type: 'NULL',
  params: {
    answer: { title: 'MOCK NULL TITLE', value: 'MOCK NULL VALUE' },
    changeAnswer: { href: 'MOCK NULL CHANGE HREF', text: 'MOCK NULL CHANGE TEXT', visuallyHiddenText: 'MOCK NULL VISUALLY HIDDEN TEXT' }
  }
}

const MOCK_CHECK_ANSWERS = [
  MOCK_STRING_ANSWER,
  MOCK_NUMBER_ANSWER,
  {
    type: 'OBJECT',
    params: {
      answer: { title: 'MOCK OBJECT TITLE', value: 'MOCK OBJECT VALUE' },
      changeAnswer: { href: 'MOCK OBJECT CHANGE HREF', text: 'MOCK OBJECT CHANGE TEXT', visuallyHiddenText: 'MOCK OBJECT VISUALLY HIDDEN TEXT' }
    }
  },
  {
    type: 'ARRAY',
    params: {
      answer: { title: 'MOCK ARRAY TITLE', value: 'MOCK ARRAY VALUE' },
      changeAnswer: { href: 'MOCK ARRAY CHANGE HREF', text: 'MOCK ARRAY CHANGE TEXT', visuallyHiddenText: 'MOCK ARRAY VISUALLY HIDDEN TEXT' }
    }
  },
  MOCK_BOOLEAN_ANSWER,
  MOCK_NULL_ANSWER
]

describe('shinkansen-sprockets/sprockets/check-answers/group', () => {
  describe('<Group />', () => {
    describe('With required props', () => {
      const component = (
        <Group />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          return expect(Group.prototype.getClassName)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      it('renders type `string` answers', () => {
        const component = (
          <Group
            onChange={jest.fn()}
            checkAnswers={[
              MOCK_STRING_ANSWER
            ]}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders type `number` answers', () => {
        const component = (
          <Group
            onChange={jest.fn()}
            checkAnswers={[
              MOCK_NUMBER_ANSWER
            ]}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders type `object` answers', () => {
        const component = (
          <Group
            onChange={jest.fn()}
            checkAnswers={MOCK_CHECK_ANSWERS}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders type `array` answers', () => {
        const component = (
          <Group
            onChange={jest.fn()}
            checkAnswers={MOCK_CHECK_ANSWERS}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders type `boolean` answers', () => {
        const component = (
          <Group
            onChange={jest.fn()}
            checkAnswers={[
              MOCK_BOOLEAN_ANSWER
            ]}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders type `null` answers', () => {
        const component = (
          <Group
            onChange={jest.fn()}
            checkAnswers={[
              MOCK_NULL_ANSWER
            ]}
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
          <Group />
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
