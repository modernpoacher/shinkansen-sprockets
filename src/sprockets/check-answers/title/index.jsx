/**
 * CheckAnswersTitle component
 */

import React from 'react'
import classnames from 'classnames'
import Title from 'shinkansen-sprockets/components/title'

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

CheckAnswersTitle.propTypes = {
  ...Title.propTypes
}
