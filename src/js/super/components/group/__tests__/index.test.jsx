/**
 *  @typedef {SprocketsTypes.Super.Components.Group.GroupProps} GroupProps
 */

import React from 'react'
import {
  snapshotOf
} from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import getComponentInstanceFrom from 'react-component-instance/container'

import Group from '#sprockets/super/components/group'

describe('#sprockets/super/components/group', () => {
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
            groupRef={MOCK_GROUP_REF}>
            MOCK CHILDREN
          </Group>
        )

        expect(group)
          .toBeInstanceOf(HTMLFieldSetElement)
      })

      describe('Always', () => {
        it('invokes `getClassName`', () => {
          const getClassNameSpy = jest.spyOn(Group.prototype, 'getClassName')

          render(
            <Group
              groupRef={MOCK_GROUP_REF}>
              MOCK CHILDREN
            </Group>
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
            groupRef={MOCK_GROUP_REF}>
            MOCK CHILDREN
          </Group>
        )

        expect(snapshotOf(group))
          .toMatchSnapshot()
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      /**
       *  @type {undefined | Component<GroupProps>}
       */
      let instance

      beforeEach(() => {
        const {
          container
        } = render(
          <Group
            groupRef={MOCK_GROUP_REF}>
            MOCK CHILDREN
          </Group>
        )

        instance = getComponentInstanceFrom(container)
      })

      describe('`props` have changed', () => {
        describe('Prop `children` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              children: 'MOCK CHANGE CHILDREN'
            }))
              .toBe(true)
          })
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          expect(instance.shouldComponentUpdate({ // instance.props
            ...instance.props
          }))
            .toBe(false)
        })
      })
    })

    describe('`getClassName()`', () => {
      it('returns a string', () => {
        const {
          container
        } = render(
          <Group />
        )

        const instance = getComponentInstanceFrom(container)

        expect(instance.getClassName())
          .toEqual(expect.any(String))
      })
    })
  })
})
