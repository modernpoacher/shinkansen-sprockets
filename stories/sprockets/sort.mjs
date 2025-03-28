const STRING = 'String'
const NUMBER = 'Number'
const ARRAY = 'Array'
const OBJECT = 'Object'
const BOOLEAN = 'Boolean'
const NULL = 'Null'
const ENUM = 'Enum'

const ANY_OF = 'Any Of'
const ONE_OF = 'One Of'
const ALL_OF = 'All Of'

const UP = -1
const HOLD = 0
const DOWN = 1

/**
 *  @param {string} v
 *  @returns {boolean}
 */
export function hasSprocket (v) {
  return /^(.*) .*/.test(v)
}

/**
 *  @param {string} v
 *  @returns {string}
 */
export function getSprocket (v) {
  const m = v.match(/(.*) \((.*)\)/)
  if (m) return m[1]
  return v
}

/**
 *  @param {string} v
 *  @returns {boolean}
 */
export function hasType (v) {
  return /^.* \((.*)\)/.test(v)
}

/**
 *  @param {string} v
 *  @returns {string}
 */
export function getType (v) {
  const m = v.match(/(.*) \((.*)\)/)
  if (m) return m[2]
  return v
}

/**
 *  @param {{ params: { answer: { title: string } } }} alpha
 *  @param {{ params: { answer: { title: string } } }} omega
 *  @returns {number}
 */
export default function sort ({
  params: {
    answer: {
      title: alpha
    }
  }
}, {
  params: {
    answer: {
      title: omega
    }
  }
}) {
  const a = getSprocket(alpha)
  const o = getSprocket(omega)

  /**
   *  Different Sprocket
   */
  if (a !== o) {
    if (a === STRING) return UP

    if (a === NULL) return DOWN

    if (a === NUMBER) {
      if (o === STRING) {
        return DOWN
      } else {
        if (o === ARRAY || o === OBJECT || o === BOOLEAN || o === NULL) {
          return HOLD
        }
      }
    }

    if (a === ARRAY) {
      if (o === STRING || o === NUMBER) {
        return DOWN
      } else {
        if (o === OBJECT || o === BOOLEAN || o === NULL) {
          return HOLD
        }
      }
    }

    if (a === OBJECT) {
      if (o === STRING || o === NUMBER || o === ARRAY) {
        return DOWN
      } else {
        if (o === BOOLEAN || o === NULL) {
          return HOLD
        }
      }
    }

    if (a === BOOLEAN) {
      if (o === STRING || o === NUMBER || o === ARRAY || o === OBJECT) {
        return DOWN
      } else {
        if (o === NULL) {
          return HOLD
        }
      }
    }
  }

  /**
   *  Matching Sprocket
   */
  if (a === o) {
    if (hasType(alpha)) {
      const a = getType(alpha)

      if (hasType(omega)) {
        if (a === ENUM) return UP

        if (a === ALL_OF) return DOWN

        const o = getType(omega)

        if (a === ANY_OF) {
          if (o === ENUM) {
            return DOWN
          }

          if (o === ONE_OF) {
            return UP
          }

          if (o === ALL_OF) {
            return UP
          }
        }

        if (a === ONE_OF) {
          if (o === ENUM) {
            return DOWN
          }

          if (o === ANY_OF) {
            return DOWN
          }

          if (o === ALL_OF) {
            return UP
          }
        }
      }

      return DOWN
    }

    return UP
  }

  /**
   *  For anything which falls through
   */
  return alpha.localeCompare(omega)
}
