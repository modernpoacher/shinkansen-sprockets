/**
 *  @typedef {SprocketsTypes.AnswerDefinitionType} AnswerDefinitionType
 *  @typedef {SprocketsTypes.Super.Components.Group.GroupProps} GroupProps
 *  @typedef {SprocketsTypes.Super.Components.Group.GroupState} GroupState
 *  @typedef {SprocketsTypes.Sprockets.CheckAnswers.Group.CheckAnswersProps} CheckAnswersProps
 *  @typedef {SprocketsTypes.Sprockets.CheckAnswers.Group.CheckAnswersState} CheckAnswersState
 */

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

jest.mock('#sprockets/sprockets/check-answers/group/answer-title', () => () => 'MOCK ANSWER TITLE')
jest.mock('#sprockets/sprockets/check-answers/group/answer-value', () => () => 'MOCK ANSWER VALUE')
jest.mock('#sprockets/sprockets/check-answers/group/change-answer', () => () => 'MOCK CHANGE ANSWER')

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

        /**
         *  @deprecated For migration toward Testing Library
         */
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

        /**
         *  @deprecated For migration toward Testing Library
         */
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

        /**
         *  @deprecated For migration toward Testing Library
         */
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

        /**
         *  @deprecated For migration toward Testing Library
         */
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

        /**
         *  @deprecated For migration toward Testing Library
         */
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

        /**
         *  @deprecated For migration toward Testing Library
         */
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
              const instance = getInstanceFrom(container)

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
              const instance = getInstanceFrom(container)

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
              const instance = getInstanceFrom(container)

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
              const instance = getInstanceFrom(container)

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
              const instance = getInstanceFrom(container)

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
              const instance = getInstanceFrom(container)

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
            const instance = getInstanceFrom(container)

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
            const instance = getInstanceFrom(container)

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
            const instance = getInstanceFrom(container)

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
            const instance = getInstanceFrom(container)

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
            const instance = getInstanceFrom(container)

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
            const instance = getInstanceFrom(container)

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
