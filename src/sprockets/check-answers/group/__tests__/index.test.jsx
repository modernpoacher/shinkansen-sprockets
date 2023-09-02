import React from 'react'
import renderer from 'react-test-renderer'

import classnames from 'classnames'

import Super from 'shinkansen-sprockets/components/group'
import Group from '../index.jsx'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('../answer-title.jsx', () => () => 'MOCK ANSWER TITLE')
jest.mock('../answer-value.jsx', () => () => 'MOCK ANSWER VALUE')
jest.mock('../change-answer.jsx', () => () => 'MOCK CHANGE ANSWER')

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
              { type: 'STRING', params: { answer: {}, changeAnswer: {} } }
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
              { type: 'NUMBER', params: { answer: {}, changeAnswer: {} } }
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
            checkAnswers={[
              { type: 'STRING', params: { answer: {}, changeAnswer: {} } },
              { type: 'NUMBER', params: { answer: {}, changeAnswer: {} } },
              { type: 'BOOLEAN', params: { answer: {}, changeAnswer: {} } },
              { type: 'NULL', params: { answer: {}, changeAnswer: {} } }
            ]}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders type `array` answers', () => {
        const component = (
          <Group
            onChange={jest.fn()}
            checkAnswers={[
              { type: 'STRING', params: { answer: {}, changeAnswer: {} } },
              { type: 'NUMBER', params: { answer: {}, changeAnswer: {} } },
              { type: 'BOOLEAN', params: { answer: {}, changeAnswer: {} } },
              { type: 'NULL', params: { answer: {}, changeAnswer: {} } }
            ]}
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
              { type: 'BOOLEAN', params: { answer: {}, changeAnswer: {} } }
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
              { type: 'NULL', params: { answer: {}, changeAnswer: {} } }
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
