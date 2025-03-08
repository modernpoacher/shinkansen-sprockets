/**
 *  @typedef {SprocketsTypes.AnswerDefinitionType['params']} ParamsType
 *  @typedef {SprocketsTypes.FieldChangeType} FieldChangeType
 */

import debug from 'debug'

const log = debug('shinkansen-sprockets/transformers/check-answers')
const info = debug('shinkansen-sprockets/transformers/check-answers:info')

log('`shinkansen` is awake')

/**
 *  @param {ParamsType} params
 *  @returns {FieldChangeType}
 */
export default function transform ({ changeAnswer: { text, href } }) {
  log('transform')

  info({ text, href })

  return {
    text,
    href
  }
}
