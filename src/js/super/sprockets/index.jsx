/**
 *  @typedef {SprocketsTypes.Sprockets.SprocketProps} SprocketProps
 */

/**
 *  Sprocket component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Title from '#sprockets/super/components/title'
import Group from '#sprockets/super/components/group'

export default class Sprocket extends Component {
  getClassName () {
    return 'sprocket'
  }

  /**
   *  @param {SprocketProps} props
   *  @returns {boolean}
   */
  shouldComponentUpdate (props) {
    return (
      (props.children !== this.props.children) ||
      (props.title !== this.props.title)
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
      groupRef,
      children
    } = this.props

    return (
      <Group
        groupRef={groupRef}>
        {this.renderTitle()}
        {children}
      </Group>
    )
  }

  render () {
    const className = this.getClassName()

    return (
      <div className={className}>
        {this.renderGroup()}
      </div>
    )
  }
}

Sprocket.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node
    )
  ]),
  groupRef: PropTypes.shape({
    current: PropTypes.shape({})
  })
}
