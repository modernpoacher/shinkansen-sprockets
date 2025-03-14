/**
 *  @typedef {SprocketsTypes.Super.Components.Title.TitleProps} TitleProps
 *  @typedef {SprocketsTypes.Sprockets.CheckAnswers.Title.CheckAnswersProps} CheckAnswersProps
 */

/**
 *  CheckAnswersTitle component
 */
import React from 'react'
import classnames from 'classnames'

import Title from '#sprockets/super/components/title'

/**
 *  @extends {Title<TitleProps & CheckAnswersProps>}
 */
export default class CheckAnswersTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'check-answers')
  }

  render () {
    const {
      title
    } = this.props

    if (title) {
      return (
        <h2 className={this.getClassName()}>
          {this.renderTextContent(title)}
        </h2>
      )
    }

    return null
  }
}
