import React from 'react'
import PropTypes from 'prop-types'

/**
 *  @param {number} n
 *  @returns {(
 *    a: Array<string | React.JSX.Element>,
 *    v: string,
 *    i: number
 *  ) => Array<string | React.JSX.Element>}
 */
function getReduce (n) {
  /**
   *  @param {Array<string | React.JSX.Element>} a
   *  @param {string} v
   *  @param {number} i
   *  @returns {Array<string | React.JSX.Element>}
   */
  return function reduce (a, v, i) {
    const s = String(v)

    return (i !== n)
      ? a.concat(s).concat(<br key={i} />)
      : a.concat(s)
  }
}

/**
 *  @param {string | string[]} value
 *  @returns {string | Array<string | React.JSX.Element>}
 */
function getAnswerValue (value) {
  if (Array.isArray(value)) {
    const n = value.length - 1

    return (
      value.reduce(getReduce(n), [])
    )
  }

  return String(value)
}

/**
 *  @param {{ answer: { value: string | string[] } }} answer
 *  @returns {React.JSX.Element}
 */
export default function AnswerValue ({ answer: { value } }) {
  return (
    <dd className='answer-value'>
      {getAnswerValue(value)}
    </dd>
  )
}

AnswerValue.propTypes = {
  answer: PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(
        PropTypes.string
      )
    ]).isRequired
  }).isRequired
}
