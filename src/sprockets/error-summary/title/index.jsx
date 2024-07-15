/**
 * ErrorSummaryTitle component
 */

import React from 'react'
import classnames from 'classnames'
import Title from 'shinkansen-sprockets/components/title'

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

ErrorSummaryTitle.propTypes = {
  ...Title.propTypes
}
