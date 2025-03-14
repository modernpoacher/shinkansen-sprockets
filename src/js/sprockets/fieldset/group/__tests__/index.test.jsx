import React from 'react'
import renderer from 'react-test-renderer'
import classnames from 'classnames'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import getInstanceFrom from 'react-component-instance/container'

import Super from '#sprockets/super/components/group'
import Group from '#sprockets/sprockets/fieldset/group'

jest.mock('classnames', () => jest.fn().mockReturnValue('MOCK CLASSNAME'))

describe('#sprockets/sprockets/fieldset/group', () => {
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

      /**
       *  @deprecated For migration toward Testing Library
       */
      it('matches the snapshot', () => {
        expect(renderer.create((
          <Group
            groupRef={MOCK_GROUP_REF}>
            MOCK CHILDREN
          </Group>
        )).toJSON())
          .toMatchSnapshot()
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
          .toHaveBeenCalledWith('MOCK CLASSNAME', 'fieldset')
      })
    })
  })
})
