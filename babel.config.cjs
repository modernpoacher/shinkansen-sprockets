const debug = require('debug')

const log = debug('shinkansen-sprockets')

const {
  env: {
    NODE_ENV = 'development'
  }
} = process

log('`shinkansen` is awake')

function env () {
  log({ NODE_ENV })

  return (
    NODE_ENV === 'production'
  )
}

const presets = [
  [
    '@babel/env',
    {
      targets: {
        node: 'current',
        browsers: [
          'last 4 versions',
          'safari >= 9',
          'ios >= 8',
          'ie >= 9',
          '> 2%'
        ]
      },
      useBuiltIns: 'usage',
      corejs: 3
    }
  ],
  '@babel/react'
]

const plugins = [
  '@babel/syntax-jsx',
  [
    'module-resolver', {
      alias: {
        /**
         *  Storybook
         */
        'shinkansen-sprockets/common': './src/common/index.mjs',
        'shinkansen-sprockets/sprockets/check-answers/group/answer-item': './src/sprockets/check-answers/group/answer-item.jsx',
        'shinkansen-sprockets/sprockets/check-answers/group/answer-title': './src/sprockets/check-answers/group/answer-title.jsx',
        'shinkansen-sprockets/sprockets/check-answers/group/answer-value': './src/sprockets/check-answers/group/answer-value.jsx',
        'shinkansen-sprockets/sprockets/check-answers/group/change-answer': './src/sprockets/check-answers/group/change-answer.jsx',
        'shinkansen-sprockets/sprockets/check-answers/group/visually-hidden-text': './src/sprockets/check-answers/group/visually-hidden-text.jsx',
        'shinkansen-sprockets/sprockets/check-answers/group': './src/sprockets/check-answers/group/index.jsx',
        'shinkansen-sprockets/sprockets/check-answers/title': './src/sprockets/check-answers/title/index.jsx',
        'shinkansen-sprockets/sprockets/check-answers': './src/sprockets/check-answers/index.jsx',
        'shinkansen-sprockets/sprockets/error-summary/group/error-item': './src/sprockets/error-summary/group/error-item.jsx',
        'shinkansen-sprockets/sprockets/error-summary/group': './src/sprockets/error-summary/group/index.jsx',
        'shinkansen-sprockets/sprockets/error-summary/title': './src/sprockets/error-summary/title/index.jsx',
        'shinkansen-sprockets/sprockets/error-summary': './src/sprockets/error-summary/index.jsx',
        'shinkansen-sprockets/sprockets/fieldset/description': './src/sprockets/fieldset/description/index.jsx',
        'shinkansen-sprockets/sprockets/fieldset/error-message': './src/sprockets/fieldset/error-message/index.jsx',
        'shinkansen-sprockets/sprockets/fieldset/group': './src/sprockets/fieldset/group/index.jsx',
        'shinkansen-sprockets/sprockets/fieldset/title': './src/sprockets/fieldset/title/index.jsx',
        'shinkansen-sprockets/sprockets/fieldset': './src/sprockets/fieldset/index.jsx',
        'shinkansen-sprockets/sprockets': './src/sprockets/index.jsx',
        'shinkansen-sprockets/components/common/text-content': './src/components/common/text-content/index.jsx',
        'shinkansen-sprockets/components/description': './src/components/description/index.jsx',
        'shinkansen-sprockets/components/error-message': './src/components/error-message/index.jsx',
        'shinkansen-sprockets/components/title': './src/components/title/index.jsx',
        'shinkansen-sprockets/components/group': './src/components/group/index.jsx',
        '#stories': './stories'
      }
    }
  ]
]

module.exports = (api) => {
  if (api) api.cache.using(env)

  return {
    presets,
    plugins,
    ignore: [
      /node_modules\/(?!shinkansen|@modernpoacher)/
    ]
  }
}
