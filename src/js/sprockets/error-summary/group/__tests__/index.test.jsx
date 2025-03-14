import React from 'react'
import renderer from 'react-test-renderer'
import classnames from 'classnames'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import getInstanceFrom from 'react-component-instance/container'

import Super from '#sprockets/super/components/group'
import Group from '#sprockets/sprockets/error-summary/group'

jest.mock('classnames', () => jest.fn().mockReturnValue('MOCK CLASSNAME'))

const MOCK_ERROR_MESSAGE = {
  type: 'UNKNOWN',
  params: {
    expectedType: 'string'
  },
  uri: '#/'
}

const MOCK_CHANGED_ERROR_MESSAGE = {
  type: 'UNKNOWN',
  params: {
    expectedType: 'number'
  },
  uri: '#/'
}

describe('#sprockets/sprockets/error-summary/group', () => {
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
      it('renders', () => {
        const {
          container: {
            firstElementChild: group
          }
        } = render(
          <Group
            errorSummary={[{ type: 'UNKNOWN', params: {} }]}
          />
        )

        expect(group)
          .toBeInstanceOf(HTMLUListElement)
      })

      describe('Always', () => {
        it('invokes `getClassName`', () => {
          const getClassNameSpy = jest.spyOn(Group.prototype, 'getClassName')

          render(
            <Group
              errorSummary={[{ type: 'UNKNOWN', params: {} }]}
            />
          )

          expect(getClassNameSpy)
            .toHaveBeenCalled()
        })
      })

      /**
       *  @deprecated For migration toward Testing Library
       */
      it('matches the snapshot', () => {
        expect(renderer.create((
          <Group
            errorSummary={[{ type: 'UNKNOWN', params: {} }]}
          />
        )).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      describe('`props` have changed', () => {
        describe('Prop `errorSummary` has changed', () => {
          it('returns true', () => {
            const {
              container
            } = render(
              <Group
                groupRef={MOCK_GROUP_REF}
                errorSummary={[MOCK_ERROR_MESSAGE]}
              />
            )

            /**
             *  @type {undefined | Group<GroupProps & CheckAnswersProps, GroupState & CheckAnswersState>}
             */
            const instance = getInstanceFrom(container)

            const {
              props,
              state
            } = instance

            expect(instance.shouldComponentUpdate(
              {
                ...props,
                errorSummary: [MOCK_CHANGED_ERROR_MESSAGE]
              },
              {
                ...state,
                errorSummary: [MOCK_CHANGED_ERROR_MESSAGE]
              }
            ))
              .toBe(true)
          })
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          const {
            container
          } = render(
            <Group
              groupRef={MOCK_GROUP_REF}
              errorSummary={[MOCK_ERROR_MESSAGE]}
            />
          )

          /**
           *  @type {undefined | Group<GroupProps & CheckAnswersProps, GroupState & CheckAnswersState>}
           */
          const instance = getInstanceFrom(container)

          const {
            props,
            state
          } = instance

          expect(instance.shouldComponentUpdate(
            {
              ...props,
              errorSummary: [MOCK_ERROR_MESSAGE]
            },
            {
              ...state,
              errorSummary: [MOCK_ERROR_MESSAGE]
            }
          ))
            .toBe(false)
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
          .toHaveBeenCalledWith('MOCK CLASSNAME', 'error-summary')
      })
    })
  })
})
