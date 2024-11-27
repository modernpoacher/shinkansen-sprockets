/**
 * Title component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TextContent from '#sprockets/components/common/text-content'

export default class Title extends Component {
  hasTextContent () {
    const { title } = this.props

    return !!title
  }

  getTextContent () {
    const { title } = this.props

    return title
  }

  getClassName () {
    return 'title'
  }

  shouldComponentUpdate (props, state) {
    return (
      (props.title !== this.props.title)
    )
  }

  renderTextContent () {
    if (this.hasTextContent()) {
      const textContent = this.getTextContent()

      return (
        <TextContent textContent={textContent} />
      )
    }

    return null
  }

  render () {
    if (this.hasTextContent()) {
      return (
        <legend className={this.getClassName()}>
          {this.renderTextContent()}
        </legend>
      )
    }

    return null
  }
}

Title.propTypes = {
  title: PropTypes.string
}
