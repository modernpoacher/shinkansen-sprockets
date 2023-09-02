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
    '@babel/env', {
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
  '@babel/proposal-export-default-from',
  '@babel/proposal-export-namespace-from',
  [
    '@babel/proposal-class-properties',
    {
      loose: false
    }
  ],
  [
    'module-resolver', {
      alias: {
        /**
         *  Storybook
         */
        'shinkansen-sprockets/sprockets/check-answers/group/answer-item': './src/sprockets/group/check-answers/answer-item.cjs',
        'shinkansen-sprockets/sprockets/check-answers/group/answer-title': './src/sprockets/group/check-answers/answer-title.cjs',
        'shinkansen-sprockets/sprockets/check-answers/group/answer-value': './src/sprockets/group/check-answers/answer-value.cjs',
        'shinkansen-sprockets/sprockets/check-answers/group/change-answer': './src/sprockets/group/check-answers/change-answer.cjs',
        'shinkansen-sprockets/sprockets/check-answers/group/visually-hidden-text': './src/sprockets/group/check-answers/visually-hidden-text.cjs',
        'shinkansen-sprockets/sprockets/check-answers/group': './src/sprockets/check-answers/group/index.cjs',
        'shinkansen-sprockets/sprockets/check-answers/title': './src/sprockets/check-answers/title/index.cjs',
        'shinkansen-sprockets/sprockets/check-answers': './src/sprockets/check-answers/index.cjs',
        'shinkansen-sprockets/sprockets/error-summary/group/error-item': './src/sprockets/group/error-summary/error-item.cjs',
        'shinkansen-sprockets/sprockets/error-summary/group': './src/sprockets/error-summary/group/index.cjs',
        'shinkansen-sprockets/sprockets/error-summary/title': './src/sprockets/error-summary/title/index.cjs',
        'shinkansen-sprockets/sprockets/error-summary': './src/sprockets/error-summary/index.cjs',
        'shinkansen-sprockets/sprockets/fieldset/description': './src/sprockets/description/fieldset/index.cjs',
        'shinkansen-sprockets/sprockets/fieldset/error-message': './src/sprockets/error-message/fieldset/index.cjs',
        'shinkansen-sprockets/sprockets/fieldset/group': './src/sprockets/group/fieldset/index.cjs',
        'shinkansen-sprockets/sprockets/fieldset/title': './src/sprockets/title/fieldset/index.cjs',
        'shinkansen-sprockets/sprockets/fieldset': './src/sprockets/fieldset/index.cjs',
        'shinkansen-sprockets/sprockets': './src/sprockets/index.cjs',
        'shinkansen-sprockets/components/common/text-content': './src/components/common/text-content/index.cjs',
        'shinkansen-sprockets/components/description': './src/components/description/index.cjs',
        'shinkansen-sprockets/components/error-message': './src/components/error-message/index.cjs',
        'shinkansen-sprockets/components/title': './src/components/title/index.cjs',
        'shinkansen-sprockets/components/group': './src/components/group/index.cjs',
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
