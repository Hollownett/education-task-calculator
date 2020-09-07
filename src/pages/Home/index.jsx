import React from 'react'

import { PageLayout } from '@/layouts'

import Header from '@/components/Header'

import { Card } from './components'

export default () => {
  return (
    <PageLayout>
      <Card>
        <Header />
      </Card>
    </PageLayout>
  )
}
