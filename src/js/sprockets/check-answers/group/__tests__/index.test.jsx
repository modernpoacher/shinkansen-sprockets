/**
 *  @typedef {SprocketsTypes.Super.Components.Group.GroupProps} GroupProps
 *  @typedef {SprocketsTypes.Super.Components.Group.GroupState} GroupState
 *  @typedef {SprocketsTypes.Sprockets.CheckAnswers.Group.CheckAnswersProps} CheckAnswersProps
 *  @typedef {SprocketsTypes.Sprockets.CheckAnswers.Group.CheckAnswersState} CheckAnswersState
 */

import React from 'react'
import PropTypes from 'prop-types'
import snapshotOf from 'react-component-snapshot'
import renderer from 'react-test-renderer'
import classnames from 'classnames'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import getComponentInstanceFrom from 'react-component-instance/container'

import Super from '#sprockets/super/components/group'
import Group from '#sprockets/sprockets/check-answers/group'

import {
  MOCK_STRING_ANSWER,
  MOCK_NUMBER_ANSWER,
  MOCK_BOOLEAN_ANSWER,
  MOCK_NULL_ANSWER,
  MOCK_CHECK_ANSWERS,
  MOCK_CHANGED_STRING_ANSWER,
  MOCK_CHANGED_NUMBER_ANSWER,
  MOCK_CHANGED_BOOLEAN_ANSWER,
  MOCK_CHANGED_NULL_ANSWER,
  MOCK_CHANGED_CHECK_ANSWERS
} from './definitions.mjs'

jest.mock('classnames', () => jest.fn().mockReturnValue('MOCK CLASSNAME'))

/**
 *  @param {{
 *    to: string | { pathname: string },
 *    children: React.ReactNode | React.ReactNode[]
 *  }} prop
 *  @returns {React.JSX.Element}
 */
function MockLink ({ to, children }) {
  if (typeof to === 'string') {
    return (
      <a href={to} className='mock-link'>
        {children}
      </a>
    )
  }

  const {
    pathname
  } = to

  return (
    <a href={pathname} className='mock-link'>
      {children}
    </a>
  )
}

MockLink.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string
    })
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node
    )
  ])
}

jest.mock('react-router', () => {
  return {
    __esModule: true,
    Link: MockLink
  }
})

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

      /**
       *  @deprecated For migration toward Testing Library
       */
      xit('matches the snapshot', () => {
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

          expect(snapshotOf(group))
            .toMatchSnapshot()
        })

        /**
         *  @deprecated For migration toward Testing Library
         */
        xit('matches the snapshot', () => {
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

          expect(snapshotOf(group))
            .toMatchSnapshot()
        })

        /**
         *  @deprecated For migration toward Testing Library
         */
        xit('matches the snapshot', () => {
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

          expect(snapshotOf(group))
            .toMatchSnapshot()
        })

        /**
         *  @deprecated For migration toward Testing Library
         */
        xit('matches the snapshot', () => {
          expect(renderer.create(
            <Group
              groupRef={MOCK_GROUP_REF}
              checkAnswers={MOCK_CHECK_ANSWERS}
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

          expect(snapshotOf(group))
            .toMatchSnapshot()
        })

        /**
         *  @deprecated For migration toward Testing Library
         */
        xit('matches the snapshot', () => {
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

          expect(snapshotOf(group))
            .toMatchSnapshot()
        })

        /**
         *  @deprecated For migration toward Testing Library
         */
        xit('matches the snapshot', () => {
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

          expect(snapshotOf(group))
            .toMatchSnapshot()
        })

        /**
         *  @deprecated For migration toward Testing Library
         */
        xit('matches the snapshot', () => {
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

    describe('`shouldComponentUpdate()`', () => {
      describe('`props` have changed', () => {
        describe('Prop `checkAnswers` has changed', () => {
          describe('`string` answers', () => {
            it('returns true', () => {
              const {
                container
              } = render(
                <Group
                  groupRef={MOCK_GROUP_REF}
                  checkAnswers={[MOCK_STRING_ANSWER]}
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
                  checkAnswers: [MOCK_CHANGED_STRING_ANSWER]
                },
                {
                  ...state,
                  checkAnswers: [MOCK_CHANGED_STRING_ANSWER]
                }
              ))
                .toBe(true)
            })
          })

          describe('`number` answers', () => {
            it('returns true', () => {
              const {
                container
              } = render(
                <Group
                  groupRef={MOCK_GROUP_REF}
                  checkAnswers={[MOCK_NUMBER_ANSWER]}
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
                  checkAnswers: [MOCK_CHANGED_NUMBER_ANSWER]
                },
                {
                  ...state,
                  checkAnswers: [MOCK_CHANGED_NUMBER_ANSWER]
                }
              ))
                .toBe(true)
            })
          })

          describe('`array` answers', () => {
            it('returns true', () => {
              const {
                container
              } = render(
                <Group
                  groupRef={MOCK_GROUP_REF}
                  checkAnswers={MOCK_CHECK_ANSWERS}
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
                  checkAnswers: MOCK_CHANGED_CHECK_ANSWERS
                },
                {
                  ...state,
                  checkAnswers: MOCK_CHANGED_CHECK_ANSWERS
                }
              ))
                .toBe(true)
            })
          })

          describe('`object` answers', () => {
            it('returns true', () => {
              const {
                container
              } = render(
                <Group
                  groupRef={MOCK_GROUP_REF}
                  checkAnswers={MOCK_CHECK_ANSWERS}
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
                  checkAnswers: MOCK_CHANGED_CHECK_ANSWERS
                },
                {
                  ...state,
                  checkAnswers: MOCK_CHANGED_CHECK_ANSWERS
                }
              ))
                .toBe(true)
            })
          })

          describe('`boolean` answers', () => {
            it('returns true', () => {
              const {
                container
              } = render(
                <Group
                  groupRef={MOCK_GROUP_REF}
                  checkAnswers={[MOCK_BOOLEAN_ANSWER]}
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
                  checkAnswers: [MOCK_CHANGED_BOOLEAN_ANSWER]
                },
                {
                  ...state,
                  checkAnswers: [MOCK_CHANGED_BOOLEAN_ANSWER]
                }
              ))
                .toBe(true)
            })
          })

          describe('`null` answers', () => {
            it('returns true', () => {
              const {
                container
              } = render(
                <Group
                  groupRef={MOCK_GROUP_REF}
                  checkAnswers={[MOCK_NULL_ANSWER]}
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
                  checkAnswers: [MOCK_CHANGED_NULL_ANSWER]
                },
                {
                  ...state,
                  checkAnswers: [MOCK_CHANGED_NULL_ANSWER]
                }
              ))
                .toBe(true)
            })
          })
        })
      })

      describe('`props` have not changed', () => {
        describe('`string` answers', () => {
          it('returns false', () => {
            const {
              container
            } = render(
              <Group
                groupRef={MOCK_GROUP_REF}
                checkAnswers={[MOCK_STRING_ANSWER]}
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
                checkAnswers: [MOCK_STRING_ANSWER]
              },
              {
                ...state,
                checkAnswers: [MOCK_STRING_ANSWER]
              }
            ))
              .toBe(false)
          })
        })

        describe('`number` answers', () => {
          it('returns false', () => {
            const {
              container
            } = render(
              <Group
                groupRef={MOCK_GROUP_REF}
                checkAnswers={[MOCK_NUMBER_ANSWER]}
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
                checkAnswers: [MOCK_NUMBER_ANSWER]
              },
              {
                ...state,
                checkAnswers: [MOCK_NUMBER_ANSWER]
              }
            ))
              .toBe(false)
          })
        })

        describe('`array` answers', () => {
          it('returns false', () => {
            const {
              container
            } = render(
              <Group
                groupRef={MOCK_GROUP_REF}
                checkAnswers={MOCK_CHECK_ANSWERS}
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
                checkAnswers: MOCK_CHECK_ANSWERS
              },
              {
                ...state,
                checkAnswers: MOCK_CHECK_ANSWERS
              }
            ))
              .toBe(false)
          })
        })

        describe('`object` answers', () => {
          it('returns false', () => {
            const {
              container
            } = render(
              <Group
                groupRef={MOCK_GROUP_REF}
                checkAnswers={MOCK_CHECK_ANSWERS}
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
                checkAnswers: MOCK_CHECK_ANSWERS
              },
              {
                ...state,
                checkAnswers: MOCK_CHECK_ANSWERS
              }
            ))
              .toBe(false)
          })
        })

        describe('`boolean` answers', () => {
          it('returns false', () => {
            const {
              container
            } = render(
              <Group
                groupRef={MOCK_GROUP_REF}
                checkAnswers={[MOCK_BOOLEAN_ANSWER]}
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
                checkAnswers: [MOCK_BOOLEAN_ANSWER]
              },
              {
                ...state,
                checkAnswers: [MOCK_BOOLEAN_ANSWER]
              }
            ))
              .toBe(false)
          })
        })

        describe('`null` answers', () => {
          it('returns false', () => {
            const {
              container
            } = render(
              <Group
                groupRef={MOCK_GROUP_REF}
                checkAnswers={[MOCK_NULL_ANSWER]}
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
                checkAnswers: [MOCK_NULL_ANSWER]
              },
              {
                ...state,
                checkAnswers: [MOCK_NULL_ANSWER]
              }
            ))
              .toBe(false)
          })
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
          .toHaveBeenCalledWith('MOCK CLASSNAME', 'check-answers')
      })
    })
  })
})
