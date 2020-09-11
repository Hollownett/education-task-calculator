import React from 'react'

import { PageLayout } from '@/layouts'
import Header from '@/components/FunctionalComponets/Header'

import {
  Card,
  Title,
  ThemeSelector,
  Button,
  SettignsContainer,
} from './components'

import { changeTheme } from '@/actions'
import { useDispatch, useSelector } from 'react-redux'
import { clearHistory } from '@/actions/index'

const themes = [
  {
    value: 'light',
    label: 'Light theme',
  },
  {
    value: 'dark',
    label: 'Dark theme',
  },
]

export default () => {
  const { currentTheme } = useSelector(state => state.theme)

  const dispatch = useDispatch()

  const handleChange = event => {
    dispatch(changeTheme(event.target.value))
  }

  return (
    <PageLayout>
      <Card>
        <Header />
        <SettignsContainer>
          <Title>Settigns</Title>
          <p>Switch theme</p>
          <div
            style={{
              width: '250px',
            }}>
            <ThemeSelector
              onChange={handleChange}
              value={currentTheme}>
              {themes.map(item => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </ThemeSelector>
          </div>
          <Button onClick={() => dispatch(clearHistory())}>
            CLEAR ALL HISTORY
          </Button>
        </SettignsContainer>
      </Card>
    </PageLayout>
  )
}
