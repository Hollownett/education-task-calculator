import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  HOME_PAGE_ROUTE,
  SETTIGNS_PAGE_ROUTE,
  HOME_PAGE_ROUTE_CLASSES,
  SETTIGNS_PAGE_ROUTE_CLASSES,
} from '@/constants'

import Loader from '@/components/FunctionalComponets/Loader'
import { useSelector } from 'react-redux'
import { lightTheme, darkTheme } from '@/theme'
import { ThemeProvider } from 'styled-components'

const HomePage = lazy(() =>
  import('@/pages/FunctionalPages/Home'),
)
const SettignsPage = lazy(() =>
  import('@/pages/FunctionalPages/Settigns'),
)
const HomePageClass = lazy(() =>
  import('@/pages/ClassPages/Home'),
)
const SettignsPageClass = lazy(() =>
  import('@/pages/ClassPages/Settigns'),
)

export default () => {
  const { currentTheme } = useSelector(state => state.theme)

  const handleThemeChange = selectedTheme => {
    switch (selectedTheme) {
      case 'light':
        return lightTheme
      case 'dark':
        return darkTheme
      default:
        return lightTheme
    }
  }

  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider
        theme={handleThemeChange(currentTheme)}>
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
          <Route
            exact
            path={HOME_PAGE_ROUTE_CLASSES}
            component={HomePageClass}
          />
          <Route
            path={SETTIGNS_PAGE_ROUTE_CLASSES}
            component={SettignsPageClass}
          />
        </Switch>
      </ThemeProvider>
    </Suspense>
  )
}
