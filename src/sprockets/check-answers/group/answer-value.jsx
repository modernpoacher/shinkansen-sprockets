import React from 'react'
import PropTypes from 'prop-types'

/**
 * @param {string | string[]}
 * @returns {string | string[]}
 */
function getAnswerValue (value) {
  if (Array.isArray(value)) {
    const n = value.length - 1

    return (
      value
        .reduce((a, v, i) => {
          const s = String(v)

          return (i !== n)
            ? a.concat(s).concat(<br key={i} />)
            : a.concat(s)
        }, [])
    )
  }

  return String(value)
}

/**
 * @param {SprocketsTypes.AnswerDefinitionType}
 * @returns {React.JSX.Element}
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
