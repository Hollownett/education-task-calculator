import React from 'react'

import { PageLayout } from '@/layouts'
import Header from '@/components/ClassComponents/Header'
import Calculator from '@/components/ClassComponents/Сalculator'

import { Card } from './components'

class Home extends React.Component {
  render() {
    return (
      <PageLayout>
        <Card>
          <Header />
          <Calculator />
        </Card>
      </PageLayout>
    )
  }
}

export default Home
