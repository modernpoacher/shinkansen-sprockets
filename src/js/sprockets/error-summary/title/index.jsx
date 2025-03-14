/**
 *  @typedef {SprocketsTypes.Super.Components.Title.TitleProps} TitleProps
 *  @typedef {SprocketsTypes.Sprockets.ErrorSummary.Title.ErrorSummaryProps} ErrorSummaryProps
 */

/**
 *  ErrorSummaryTitle component
 */
import React from 'react'
import classnames from 'classnames'

import Title from '#sprockets/super/components/title'

/**
 *  @extends {Title<TitleProps & ErrorSummaryProps>}
 */
export default class ErrorSummaryTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'error-summary')
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
