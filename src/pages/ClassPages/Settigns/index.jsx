import React from 'react'

import { PageLayout } from '@/layouts'
import Header from '@/components/ClassComponents/Header'

import {
  Card,
  Title,
  ThemeSelector,
  Button,
  SettignsContainer,
} from './components'

import { changeTheme, clearHistory } from '@/actions'
import { connect } from 'react-redux'

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

class Settigns extends React.Component {
  handleChange = event => {
    this.props.changeTheme(event.target.value)
  }

  render() {
    return (
      <PageLayout>
        <Card>
          <Header />
          <SettignsContainer>
            <Title>Settigns </Title>
            <p>Switch theme</p>
            <div
              style={{
                width: '250px',
              }}>
              <ThemeSelector
                onChange={this.handleChange}
                value={this.props.currentTheme}>
                {themes.map(item => (
                  <option
                    key={item.value}
                    value={item.value}>
                    {item.label}
                  </option>
                ))}
              </ThemeSelector>
            </div>
            <Button
              onClick={() => this.props.clearHistory()}>
              CLEAR ALL HISTORY
            </Button>
          </SettignsContainer>
        </Card>
      </PageLayout>
    )
  }
}

const mapStateToProps = state => ({
  currentTheme: state.theme.currentTheme,
})

export default connect(mapStateToProps, {
  changeTheme,
  clearHistory,
})(Settigns)
