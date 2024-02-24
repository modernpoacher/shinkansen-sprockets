declare module 'shinkansen-sprockets/components/title' {
  import React from 'react'

  export interface TitleProps {
    title: string
  }

  export default class Title extends React.Component<TitleProps> {}
}
