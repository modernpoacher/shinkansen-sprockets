import React from 'react'
import renderer from 'react-test-renderer'

import Title from 'shinkansen-sprockets/components/title'

jest.mock('shinkansen-sprockets/components/common/text-content', () => () => 'MOCK TEXT CONTENT')

describe('shinkansen-sprockets/components/title', () => {
  describe('<Title />', () => {
    describe('With required props', () => {
      const component = (
        <Title />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`hasTextContent`', () => {
        it('is defined', () => {
          return expect(Title.prototype.hasTextContent)
            .toBeDefined()
        })
      })

      describe('`getTextContent`', () => {
        it('is defined', () => {
          return expect(Title.prototype.getTextContent)
            .toBeDefined()
        })
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          return expect(Title.prototype.getClassName)
            .toBeDefined()
        })
      })

      describe('`shouldComponentUpdate`', () => {
        it('is defined', () => {
          return expect(Title.prototype.shouldComponentUpdate)
            .toBeDefined()
        })
      })

      describe('`renderTextContent`', () => {
        it('is defined', () => {
          return expect(Title.prototype.renderTextContent)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
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

    describe('`hasTextContent()`', () => {
      describe('With the `title` prop defined', () => {
        it('returns the `title` prop', () => {
          const component = (
            <Title title='MOCK TITLE' />
          )

          const instance = (
            renderer.create(component)
              .getInstance()
          )

          return expect(instance.hasTextContent())
            .toBe(true)
        })
      })

      describe('Without the `title` prop defined', () => {
        it('returns false', () => {
          const component = (
            <Title />
          )

          const instance = (
            renderer.create(component)
              .getInstance()
          )

          return expect(instance.hasTextContent())
            .toBe(false)
        })
      })
    })

    describe('`getTextContent()`', () => {
      it('returns the `title` prop', () => {
        const component = (
          <Title title='MOCK TITLE' />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        return expect(instance.getTextContent())
          .toBe('MOCK TITLE')
      })
    })

    describe('`getClassName()`', () => {
      it('returns the classname', () => {
        const component = (
          <Title />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        return expect(instance.getClassName())
          .toBe('title')
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const component = (
        <Title
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
            title: 'MOCK CHANGE TITLE'
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
  })
})
