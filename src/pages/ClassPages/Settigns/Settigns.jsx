import React from 'react'

import { PageLayout } from '@/layouts'
import Header from '@/components/ClassComponents/Header'

import {
    Card,
    Title,
    ThemeSelector,
    ThemeSelectorContainer,
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
    {
        value: 'colored',
        label: 'Colored theme',
    },
]

class Settigns extends React.Component {
    handleChange = event => {
        this.props.changeTheme(event.target.value)
    }

    deleteAllHistory = () => {
        this.props.clearHistory()
    }

    render() {
        return (
            <PageLayout>
                <Card>
                    <Header />
                    <SettignsContainer>
                        <Title>Settigns </Title>
                        <p>Switch theme</p>
                        <ThemeSelectorContainer>
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
                        </ThemeSelectorContainer>
                        <Button onClick={this.deleteAllHistory}>
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
