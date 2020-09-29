import React from 'react'

import { PageLayout } from '@/layouts'
import Header from '@/components/FunctionalComponets/Header'

import {
    Card,
    Title,
    ThemeSelector,
    ThemeSelectorContainer,
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
    {
        value: 'colored',
        label: 'Colored theme',
    },
]

const Settigns = () => {
    const { currentTheme } = useSelector(state => state.theme)

    const dispatch = useDispatch()

    const handleChange = event => {
        dispatch(changeTheme(event.target.value))
    }

    const deleteAllHistory = () => {
        dispatch(clearHistory())
    }

    return (
        <PageLayout>
            <Card>
                <Header />
                <SettignsContainer>
                    <Title>Settigns</Title>
                    <p>Switch theme</p>
                    <ThemeSelectorContainer>
                        <ThemeSelector
                            onChange={handleChange}
                            value={currentTheme}>
                            {themes.map(item => (
                                <option key={item.value} value={item.value}>
                                    {item.label}
                                </option>
                            ))}
                        </ThemeSelector>
                    </ThemeSelectorContainer>
                    <Button onClick={deleteAllHistory}>
                        CLEAR ALL HISTORY
                    </Button>
                </SettignsContainer>
            </Card>
        </PageLayout>
    )
}

export default Settigns