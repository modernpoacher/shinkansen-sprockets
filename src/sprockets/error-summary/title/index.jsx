/**
 *  @typedef {SprocketsTypes.Components.Title.TitleProps} TitleProps
 *  @typedef {SprocketsTypes.Components.Title.ErrorSummary.ErrorSummaryProps} ErrorSummaryProps
 */

/**
 * ErrorSummaryTitle component
 */
import React from 'react'
import classnames from 'classnames'
import Title from '#sprockets/components/title'

/**
 *  @extends {Title<TitleProps & ErrorSummaryProps>}
 */
export default class ErrorSummaryTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'error-summary')
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
