/**
 *  @typedef {SprocketsTypes.AnswerDefinitionType} AnswerDefinitionType
 *  @typedef {SprocketsTypes.Sprockets.SprocketProps} SprocketProps
 *  @typedef {SprocketsTypes.Sprockets.CheckAnswers.CheckAnswersProps} CheckAnswersProps
 */

/**
 *  CheckAnswersSprocket component
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Sprocket from '#sprockets/sprockets'
import Title from '#sprockets/sprockets/check-answers/title'
import Group from '#sprockets/sprockets/check-answers/group'

/**
 *  @type {AnswerDefinitionType[]}
 */
const DEFAULT_CHECK_ANSWERS = []

/**
 *  @extends {Sprocket<SprocketProps & CheckAnswersProps>}
 */
export default class CheckAnswersSprocket extends Sprocket {
  getClassName () {
    return classnames(super.getClassName(), 'check-answers')
  }

  /**
   *  @param {CheckAnswersProps} props
   *  @returns {boolean}
   */
  shouldComponentUpdate (props) {
    const {
      checkAnswers,
      ...superProps
    } = props

    return (
      super.shouldComponentUpdate(superProps) ||
      (checkAnswers !== this.props.checkAnswers)
    )
  }

  renderTitle () {
    const {
      title
    } = this.props

    return (
      <Title
        title={title}
      />
    )
  }

  renderGroup () {
    const {
      checkAnswers = DEFAULT_CHECK_ANSWERS
    } = this.props

    return (
      <Group
        checkAnswers={checkAnswers}
      />
    )
  }

  render () {
    const {
      checkAnswers = DEFAULT_CHECK_ANSWERS
    } = this.props

    if (checkAnswers.length) {
      return (
        <div className={this.getClassName()}>
          {this.renderTitle()}
          {this.renderGroup()}
        </div>
      )
    }

    return null
  }
}

CheckAnswersSprocket.propTypes = {
  ...Sprocket.propTypes,
  checkAnswers: PropTypes.arrayOf(PropTypes.shape({}))
}
