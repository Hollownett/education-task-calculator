import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  HOME_PAGE_ROUTE,
  SETTIGNS_PAGE_ROUTE,
} from '@/constants'

import Loader from '@/components/Loader'
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from '@/actions'
import darkTheme from '@/darkTheme'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'

const HomePage = lazy(() => import('@/pages/Home'))
const SettignsPage = lazy(() => import('@/pages/Settigns'))

export default () => {
  const { currentTheme } = useSelector(state => state.theme)

  const handleThemeChange = (selectedTheme) => {
    switch (selectedTheme) {
      case "light":
        return theme
      case "dark":
        return darkTheme
      default: return theme
    }
  }

  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={handleThemeChange(currentTheme)}>
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
      </ThemeProvider>


    </Suspense>
  )
}
