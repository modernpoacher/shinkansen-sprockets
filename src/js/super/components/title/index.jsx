/**
 *  @typedef {SprocketsTypes.Super.Components.Title.TitleProps} TitleProps
 */

/**
 *  Title component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TextContent from '#sprockets/components/common/text-content'

/**
 *  @extends {Component<TitleProps>}
 */
export default class Title extends Component {
  getClassName () {
    return 'title'
  }

  /**
   *  @param {TitleProps} props
   *  @returns {boolean}
   */
  shouldComponentUpdate (props) {
    return (
      (props.title !== this.props.title)
    )
  }

  /**
   *  @param {string} textContent
   *  @returns {React.JSX.Element}
   */
  renderTextContent (textContent) {
    return (
      <TextContent
        textContent={textContent}
      />
    )
  }

  render () {
    const {
      title
    } = this.props

    if (title) {
      return (
        <legend className={this.getClassName()}>
          {this.renderTextContent(title)}
        </legend>
      )
    }

    return null
  }
}

Title.propTypes = {
  title: PropTypes.string
}
