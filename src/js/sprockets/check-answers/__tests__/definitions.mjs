export const MOCK_STRING_ANSWER = {
  type: 'STRING',
  params: {
    answer: { title: 'MOCK STRING TITLE', value: 'MOCK STRING VALUE' },
    changeAnswer: { href: '#mock-string-change-href', text: 'MOCK STRING CHANGE TEXT', visuallyHiddenText: 'MOCK STRING VISUALLY HIDDEN TEXT' }
  }
}

export const MOCK_NUMBER_ANSWER = {
  type: 'NUMBER',
  params: {
    answer: { title: 'MOCK NUMBER TITLE', value: 'MOCK NUMBER VALUE' },
    changeAnswer: { href: '#mock-number-change-href', text: 'MOCK NUMBER CHANGE TEXT', visuallyHiddenText: 'MOCK NUMBER VISUALLY HIDDEN TEXT' }
  }
}

export const MOCK_BOOLEAN_ANSWER = {
  type: 'BOOLEAN',
  params: {
    answer: { title: 'MOCK BOOLEAN TITLE', value: 'MOCK BOOLEAN VALUE' },
    changeAnswer: { href: '#mock-boolean-change-href', text: 'MOCK BOOLEAN CHANGE TEXT', visuallyHiddenText: 'MOCK BOOLEAN VISUALLY HIDDEN TEXT' }
  }
}

export const MOCK_NULL_ANSWER = {
  type: 'NULL',
  params: {
    answer: { title: 'MOCK NULL TITLE', value: 'MOCK NULL VALUE' },
    changeAnswer: { href: '#mock-null-change-href', text: 'MOCK NULL CHANGE TEXT', visuallyHiddenText: 'MOCK NULL VISUALLY HIDDEN TEXT' }
  }
}

export const MOCK_CHECK_ANSWERS = [
  MOCK_STRING_ANSWER,
  MOCK_NUMBER_ANSWER,
  {
    type: 'OBJECT',
    params: {
      answer: { title: 'MOCK OBJECT TITLE', value: 'MOCK OBJECT VALUE' },
      changeAnswer: { href: '#mock-object-change-href', text: 'MOCK OBJECT CHANGE TEXT', visuallyHiddenText: 'MOCK OBJECT VISUALLY HIDDEN TEXT' }
    }
  },
  {
    type: 'ARRAY',
    params: {
      answer: { title: 'MOCK ARRAY TITLE', value: 'MOCK ARRAY VALUE' },
      changeAnswer: { href: '#mock-array-change-href', text: 'MOCK ARRAY CHANGE TEXT', visuallyHiddenText: 'MOCK ARRAY VISUALLY HIDDEN TEXT' }
    }
  },
  MOCK_BOOLEAN_ANSWER,
  MOCK_NULL_ANSWER
]
