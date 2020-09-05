import React from 'react'

import { PageLayout } from '@/layouts'

import Header from '@/components/Header/Header'
import Keypad from '@/components/Calculator/Keypad/Keypad'
import Display from '@/components/Calculator/Display/Display'
import { Card } from './components'

export default () => {
  return (
    <PageLayout>
      <Card>
        <Header />
        <Display />
        <Keypad />
      </Card>
    </PageLayout>
  )
}
