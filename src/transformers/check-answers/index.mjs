import debug from 'debug'

const log = debug('shinkansen-sprockets/transformers/check-answers')

log('`shinkansen` is awake')

/**
 *  @param {SprocketsTypes.AnswerDefinitionType}
 *  @returns {FieldChangeType}
 */
export default function transform ({ changeAnswer: { text, href } }) {
  log('transform')

  return {
    text,
    href
  }
}
