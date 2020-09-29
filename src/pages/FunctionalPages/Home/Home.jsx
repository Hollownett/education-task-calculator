import React from 'react'

import { PageLayout } from '@/layouts'

import Header from '@/components/FunctionalComponets/Header'
import Calculator from '@/components/FunctionalComponets/Сalculator'
import { Card } from './components'

const Home = () => {
    return (
        <PageLayout>
            <Card>
                <Header />
                <Calculator />
            </Card>
        </PageLayout>
    )
}

export default Home