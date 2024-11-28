/** @type { import('@storybook/react').Preview } */

export default {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    options: {
      storySort: {
        order: [
          'Stories',
          [
            'Sprockets',
            [
              'Check Answers',
              [
                'String',
                'Number',
                'Array',
                'Object',
                'Boolean',
                'Null'
              ],
              'Error Summary',
              'Fieldset'
            ]
          ]
        ]
      }
    }
  }
}
