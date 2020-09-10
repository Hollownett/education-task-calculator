import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  HOME_PAGE_ROUTE,
  SETTIGNS_PAGE_ROUTE,
} from '@/constants'

import Loader from '@/components/Loader'

const HomePage = lazy(() => import('@/pages/Home'))
const SettignsPage = lazy(() => import('@/pages/Settigns'))

export default () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route
        exact
        path={HOME_PAGE_ROUTE}
        component={HomePage}
      />
      <Route
        path={SETTIGNS_PAGE_ROUTE}
        component={SettignsPage}
      />
    </Switch>
  </Suspense>
)
