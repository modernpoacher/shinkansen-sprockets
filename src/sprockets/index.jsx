/**
 * Sprocket component
 *
 * @typedef {import('shinkansen-sprockets/sprockets').SprocketProps} SprocketProps
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Title from 'shinkansen-sprockets/components/title'
import Group from 'shinkansen-sprockets/components/group'

function onChange () {
  /* */
}

export default class Sprocket extends Component {
  getClassName () {
    return 'sprocket'
  }

  /**
   * @param {SprocketProps} props
   * @returns {boolean}
   */
  shouldComponentUpdate (props) {
    return (
      (props.children !== this.props.children) ||
      (props.title !== this.props.title) ||
      (props.onChange !== this.props.onChange)
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
      onChange,
      groupRef,
      children
    } = this.props

    return (
      <Group
        onChange={onChange}
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
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node
    )
  ]),
  groupRef: PropTypes.shape({
    current: PropTypes.shape().isRequired
  })
}

Sprocket.defaultProps = {
  onChange
}
