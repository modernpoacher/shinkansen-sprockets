declare module '#sprockets/components/description' {
  import React from 'react'

  export interface DescriptionProps {
    description: string
  }

  export default class Description extends React.Component<DescriptionProps> {}
}

declare module 'shinkansen-sprockets/components/description' {
  export { default } from '#sprockets/components/description'
  export * from '#sprockets/components/description'
}
