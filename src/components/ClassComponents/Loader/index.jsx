import React from 'react'

import theme from '@/theme'

import { Loader as AppLoader } from './components'

const LOADER_SIZE = 100

export default class Loader extends React.Component {
  render() {
    return (
      <AppLoader
        type="Bars"
        color={theme.colors.secondary}
        height={LOADER_SIZE}
        width={LOADER_SIZE}
      />
    )
  }
}
