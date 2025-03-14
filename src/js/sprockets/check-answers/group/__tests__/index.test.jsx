import React from 'react'
import renderer from 'react-test-renderer'
import classnames from 'classnames'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import getInstanceFrom from 'react-component-instance/container'

import Super from '#sprockets/super/components/group'
import Group from '#sprockets/sprockets/check-answers/group'

jest.mock('classnames', () => jest.fn().mockReturnValue('MOCK CLASSNAME'))

jest.mock('#sprockets/sprockets/check-answers/group/answer-title', () => () => 'MOCK ANSWER TITLE')
jest.mock('#sprockets/sprockets/check-answers/group/answer-value', () => () => 'MOCK ANSWER VALUE')
jest.mock('#sprockets/sprockets/check-answers/group/change-answer', () => () => 'MOCK CHANGE ANSWER')

const MOCK_STRING_ANSWER = {
  type: 'STRING',
  params: {
    answer: { title: 'MOCK STRING TITLE', value: 'MOCK STRING VALUE' },
    changeAnswer: { href: '#mock-string-change-href', text: 'MOCK STRING CHANGE TEXT', visuallyHiddenText: 'MOCK STRING VISUALLY HIDDEN TEXT' }
  }
}

const MOCK_NUMBER_ANSWER = {
  type: 'NUMBER',
  params: {
    answer: { title: 'MOCK NUMBER TITLE', value: 'MOCK NUMBER VALUE' },
    changeAnswer: { href: '#mock-number-change-href', text: 'MOCK NUMBER CHANGE TEXT', visuallyHiddenText: 'MOCK NUMBER VISUALLY HIDDEN TEXT' }
  }
}

const MOCK_BOOLEAN_ANSWER = {
  type: 'BOOLEAN',
  params: {
    answer: { title: 'MOCK BOOLEAN TITLE', value: 'MOCK BOOLEAN VALUE' },
    changeAnswer: { href: '#mock-boolean-change-href', text: 'MOCK BOOLEAN CHANGE TEXT', visuallyHiddenText: 'MOCK BOOLEAN VISUALLY HIDDEN TEXT' }
  }
}

const MOCK_NULL_ANSWER = {
  type: 'NULL',
  params: {
    answer: { title: 'MOCK NULL TITLE', value: 'MOCK NULL VALUE' },
    changeAnswer: { href: '#mock-null-change-href', text: 'MOCK NULL CHANGE TEXT', visuallyHiddenText: 'MOCK NULL VISUALLY HIDDEN TEXT' }
  }
}

const MOCK_CHECK_ANSWERS = [
  MOCK_STRING_ANSWER,
  MOCK_NUMBER_ANSWER,
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
  MOCK_BOOLEAN_ANSWER,
  MOCK_NULL_ANSWER
]

describe('#sprockets/sprockets/check-answers/group', () => {
  const MOCK_GROUP_REF = { current: null }

  describe('<Group />', () => {
    describe('With required props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: group
          }
        } = render(
          <Group />
        )

        expect(group)
          .toBeNull()
      })

      describe('Always', () => {
        it('invokes `getClassName`', () => {
          const getClassNameSpy = jest.spyOn(Group.prototype, 'getClassName')

          render(
            <Group />
          )

          expect(getClassNameSpy)
            .not.toHaveBeenCalled()
        })
      })

      /**
       *  @deprecated For migration toward Testing Library
       */
      it('matches the snapshot', () => {
        expect(renderer.create((
          <Group />
        )).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      describe('`string` answers', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: group
            }
          } = render(
            <Group
              groupRef={MOCK_GROUP_REF}
              checkAnswers={[
                MOCK_STRING_ANSWER
              ]}
            />
          )

          expect(group)
            .toBeInstanceOf(HTMLDListElement)
        })

        it('matches the snapshot', () => {
          expect(renderer.create(
            <Group
              groupRef={MOCK_GROUP_REF}
              checkAnswers={[
                MOCK_STRING_ANSWER
              ]}
            />
          ).toJSON())
            .toMatchSnapshot()
        })
      })

      describe('`number` answers', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: group
            }
          } = render(
            <Group
              groupRef={MOCK_GROUP_REF}
              checkAnswers={[
                MOCK_NUMBER_ANSWER
              ]}
            />
          )

          expect(group)
            .toBeInstanceOf(HTMLDListElement)
        })

        it('matches the snapshot', () => {
          expect(renderer.create(
            <Group
              groupRef={MOCK_GROUP_REF}
              checkAnswers={[
                MOCK_NUMBER_ANSWER
              ]}
            />
          ).toJSON())
            .toMatchSnapshot()
        })
      })

      describe('`object` answers', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: group
            }
          } = render(
            <Group
              groupRef={MOCK_GROUP_REF}
              checkAnswers={MOCK_CHECK_ANSWERS}
            />
          )

          expect(group)
            .toBeInstanceOf(HTMLDListElement)
        })

        it('matches the snapshot', () => {
          expect(renderer.create(
            <Group
              groupRef={MOCK_GROUP_REF}
              checkAnswers={MOCK_CHECK_ANSWERS}
            />
          ).toJSON())
            .toMatchSnapshot()
        })
      })

      describe('`array` answers', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: group
            }
          } = render(
            <Group
              groupRef={MOCK_GROUP_REF}
              checkAnswers={MOCK_CHECK_ANSWERS}
            />
          )

          expect(group)
            .toBeInstanceOf(HTMLDListElement)
        })

        it('matches the snapshot', () => {
          expect(renderer.create(
            <Group
            groupRef={MOCK_GROUP_REF}
            checkAnswers={MOCK_CHECK_ANSWERS}
          />
          ).toJSON())
            .toMatchSnapshot()
        })
      })

      describe('`boolean` answers', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: group
            }
          } = render(
            <Group
              groupRef={MOCK_GROUP_REF}
              checkAnswers={[
                MOCK_BOOLEAN_ANSWER
              ]}
            />
          )

          expect(group)
            .toBeInstanceOf(HTMLDListElement)
        })

        it('matches the snapshot', () => {
          expect(renderer.create(
            <Group
              groupRef={MOCK_GROUP_REF}
              checkAnswers={[
                MOCK_BOOLEAN_ANSWER
              ]}
            />
          ).toJSON())
            .toMatchSnapshot()
        })
      })

      describe('`null` answers', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: group
            }
          } = render(
            <Group
              groupRef={MOCK_GROUP_REF}
              checkAnswers={[
                MOCK_NULL_ANSWER
              ]}
            />
          )

          expect(group)
            .toBeInstanceOf(HTMLDListElement)
        })

        it('matches the snapshot', () => {
          expect(renderer.create(
            <Group
              groupRef={MOCK_GROUP_REF}
              checkAnswers={[
                MOCK_NULL_ANSWER
              ]}
            />
          ).toJSON())
            .toMatchSnapshot()
        })
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
          <Group />
        )

        const instance = getInstanceFrom(container)

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
          .toHaveBeenCalledWith('MOCK CLASSNAME', 'check-answers')
      })
    })
  })
})
