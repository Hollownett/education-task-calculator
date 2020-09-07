import React from 'react'

import { PageLayout } from '@/layouts'

import Loader from '@/components/Loader'
import Keypad from "@/components/Keypad"
import Histrory from "@/components/History"
import Display from "@/components/Display"
import { Card, Heading } from './components'
import Header from '@/components/Header'

export default () => {
  return (
    <PageLayout>
      <Card>
        <Header />
        <Display />
        <Keypad />
        <Histrory />
      </Card>
    </PageLayout>
  )
}
