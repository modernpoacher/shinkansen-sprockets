import debug from 'debug'

const CHAR32 = String.fromCharCode(32)
const CHAR45 = String.fromCharCode(45)

const log = debug('shinkansen-sprockets/transformers/common')

log('`shinkansen` is awake')

/**
 * @param {string} href
 * @param {string} text
 * @param {number} index
 * @returns {string}
 */
export function getKey (href, text, index) {
  return (
    `${href}-${text}-${index}`
      .toLowerCase()
      .replace(/^#/, 'error-')
      .replace(/[^\w\-\d]/g, CHAR32).trim()
      .replace(/\s\s+/g, CHAR32)
      .replace(/\-\-+/g, CHAR45) // eslint-disable-line
      .replace(/[\s\s|\-\-|\s\-|\-\s]+/g, CHAR45)
  )
}
