import React from 'react'

import { PageLayout } from '@/layouts'

import Loader from '@/components/Loader'

import { Card } from './components'

export default () => {
  return (
    <PageLayout>
      <Card>
        <Loader />
      </Card>
    </PageLayout>
  )
}
