import React, { useState } from 'react'

import { PageLayout } from '@/layouts'
import Header from '@/components/Header'

import {
  Card,
  Title,
  ThemeSelector,
  Button,
  SettignsContainer,
} from './components'
import { useDispatch } from 'react-redux'
import { clearHistory } from '@/actions/index'

export default () => {
  const [selectedTheme, setSelectedTheme] = useState(
    'light',
  )
  const dispatch = useDispatch()
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

  const handleChange = event => {
    setSelectedTheme(event.target.value)
  }

  return (
    <PageLayout>
      <Card>
        <Header />
        <SettignsContainer>
          <Title>Settings</Title>
          <p>Switch theme</p>
          <div
            style={{
              width: '250px',
            }}>
            <ThemeSelector
              onChange={handleChange}
              value={selectedTheme}>
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
