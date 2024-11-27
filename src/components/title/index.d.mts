declare module '#sprockets/components/title' {
  import React from 'react'

  export interface TitleProps {
    title: string
  }

  export default class Title extends React.Component<TitleProps> {}
}

declare module 'shinkansen-sprockets/components/title' {
  export { default } from '#sprockets/components/title'
  export * from '#sprockets/components/title'
}
