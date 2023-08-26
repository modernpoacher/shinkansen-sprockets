import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

const log = debug('@modernpoacher/sprockets/components/group/check-answers')

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
export default function AnswerValue ({ value }) {
  log('AnswerValue')

  return (
    <dd className='answer-value'>
      {getAnswerValue(value)}
    </dd>
  )
}

AnswerValue.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.string
    )
  ]).isRequired
}
