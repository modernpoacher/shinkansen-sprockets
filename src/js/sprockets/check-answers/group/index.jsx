/**
 *  @typedef {SprocketsTypes.AnswerDefinitionType} AnswerDefinitionType
 *  @typedef {SprocketsTypes.Super.Components.Group.GroupProps} GroupProps
 *  @typedef {SprocketsTypes.Super.Components.Group.GroupState} GroupState
 *  @typedef {SprocketsTypes.Sprockets.CheckAnswers.Group.CheckAnswersProps} CheckAnswersProps
 *  @typedef {SprocketsTypes.Sprockets.CheckAnswers.Group.CheckAnswersState} CheckAnswersState
 */

/**
 *  CheckAnswersGroup component
 */
import React from 'react'
import PropTypes from 'prop-types'
import equal from 'fast-deep-equal'
import classnames from 'classnames'

import debug from 'debug'

import Group from '#sprockets/super/components/group'

import {
  getKey
} from '#sprockets/transformers/common'

import AnswerTitle from '#sprockets/sprockets/check-answers/group/answer-title'
import AnswerValue from '#sprockets/sprockets/check-answers/group/answer-value'
import ChangeAnswer from '#sprockets/sprockets/check-answers/group/change-answer'

/**
 *  @type {AnswerDefinitionType[]}
 */
const DEFAULT_CHECK_ANSWERS = []

const log = debug('shinkansen-sprockets/components/group/check-answers')

/**
 *  @param {AnswerDefinitionType} answer
 *  @param {number} index
 *  @returns {React.JSX.Element}
 */
function render ({ params: { answer, changeAnswer: { href, text, ...changeAnswer } } }, index) {
  log('render')

  return (
    <div key={getKey(href, text, index)} className='answer'>
      <AnswerTitle
        answer={answer}
      />

      <AnswerValue
        answer={answer}
      />

      <ChangeAnswer
        changeAnswer={{ ...changeAnswer, href, text }}
      />
    </div>
  )
}

/**
 *  @extends {Group<GroupProps & CheckAnswersProps, GroupState & CheckAnswersState>}
 */
export default class CheckAnswersGroup extends Group {
  /**
   *  @type {CheckAnswersState}
   */
  state = {}

  getClassName () {
    return classnames(super.getClassName(), 'check-answers')
  }

  /**
   *  Compare latest 'props' with 'state' for changes to 'checkAnswers'
   *
   *  @param {CheckAnswersProps} props   Latest props
   *  @param {CheckAnswersState} state   Current state
   *  @returns {CheckAnswersState}
   */
  static getDerivedStateFromProps ({ checkAnswers: c }, { checkAnswers: C }) {
    return {
      checkAnswers: (c === C || equal(c, C)) ? C : c
    }
  }

  /**
   *  Compare latest 'props' with 'state' for changes to 'checkAnswers'
   *
   *  @param {CheckAnswersProps} props   Latest props
   *  @param {CheckAnswersState} state   Current state
   *  @returns {boolean}
   */
  shouldComponentUpdate (props, state) {
    const {
      checkAnswers: c = DEFAULT_CHECK_ANSWERS
    } = this.state

    const {
      checkAnswers: C = DEFAULT_CHECK_ANSWERS
    } = state

    return !(c === C || equal(c, C))
  }

  render () {
    const {
      checkAnswers = DEFAULT_CHECK_ANSWERS
    } = this.props

    if (checkAnswers.length) {
      const {
        groupRef
      } = this.props

      return (
        <dl
          className={this.getClassName()}
          ref={groupRef}>
          {checkAnswers.map(render)}
        </dl>
      )
    }

    return null
  }
}

CheckAnswersGroup.propTypes = {
  ...Group.propTypes,
  checkAnswers: PropTypes.arrayOf(PropTypes.shape({}))
}
