import React from 'react'
import snapshotOf from 'react-component-snapshot'
import classnames from 'classnames'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import getComponentInstanceFrom from 'react-component-instance/container'

import Super from '#sprockets/super/components/group'
import Group from '#sprockets/sprockets/error-summary/group'

import {
  MOCK_ERROR_SUMMARY,
  MOCK_CHANGED_ERROR_SUMMARY
} from './definitions.mjs'

jest.mock('classnames', () => jest.fn().mockReturnValue('MOCK CLASSNAME'))

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
       *  Element is null
       */
      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: group
          }
        } = render(
          <Group />
        )

        expect(snapshotOf(group))
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
            errorSummary={MOCK_ERROR_SUMMARY}
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
              errorSummary={MOCK_ERROR_SUMMARY}
            />
          )

          expect(getClassNameSpy)
            .toHaveBeenCalled()
        })
      })

      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: group
          }
        } = render(
          <Group
            errorSummary={MOCK_ERROR_SUMMARY}
          />
        )

        expect(snapshotOf(group))
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
                errorSummary={MOCK_ERROR_SUMMARY}
              />
            )

            /**
             *  @type {undefined | Group<GroupProps & CheckAnswersProps, GroupState & CheckAnswersState>}
             */
            const instance = getComponentInstanceFrom(container)

            const {
              props,
              state
            } = instance

            expect(instance.shouldComponentUpdate(
              {
                ...props,
                errorSummary: MOCK_CHANGED_ERROR_SUMMARY
              },
              {
                ...state,
                errorSummary: MOCK_CHANGED_ERROR_SUMMARY
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
              errorSummary={MOCK_ERROR_SUMMARY}
            />
          )

          /**
           *  @type {undefined | Group<GroupProps & CheckAnswersProps, GroupState & CheckAnswersState>}
           */
          const instance = getComponentInstanceFrom(container)

          const {
            props,
            state
          } = instance

          expect(instance.shouldComponentUpdate(
            {
              ...props,
              errorSummary: MOCK_ERROR_SUMMARY
            },
            {
              ...state,
              errorSummary: MOCK_ERROR_SUMMARY
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
          .toHaveBeenCalledWith('MOCK CLASSNAME', 'error-summary')
      })
    })
  })
})
