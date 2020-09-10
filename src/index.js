import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Application from '@/App'

import { store } from '@/store'
import theme from '@/theme'
import darkTheme from '@/darkTheme'
import GlobalStyles from '@/globalStyles'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Application />
      <GlobalStyles />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
