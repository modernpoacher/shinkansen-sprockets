/**
 *  @typedef {SprocketsTypes.Components.Title.TitleProps} TitleProps
 *  @typedef {SprocketsTypes.Components.Title.CheckAnswers.CheckAnswersProps} CheckAnswersProps
 */

/**
 * CheckAnswersTitle component
 */
import React from 'react'
import classnames from 'classnames'
import Title from '#sprockets/components/title'

/**
 *  @extends {Title<TitleProps & CheckAnswersProps>}
 */
export default class CheckAnswersTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'check-answers')
  }

  render () {
    if (this.hasTextContent()) {
      return (
        <h2 className={this.getClassName()}>
          {this.renderTextContent()}
        </h2>
      )
    }

    return null
  }
}
