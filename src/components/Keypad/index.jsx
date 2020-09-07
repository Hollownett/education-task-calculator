import React from 'react'

import theme from '@/theme'

import { Button, KeypadContainer } from './components'

export default () => {
    return (
        <KeypadContainer>
            <Button >0</Button>
            <Button >1</Button>
            <Button >2</Button>
            <Button >3</Button>
            <Button >4</Button>
            <Button >5</Button>
            <Button >6</Button>
            <Button >7</Button>
            <Button >8</Button>
            <Button >9</Button>
            <Button>(</Button>
            <Button>)</Button>
            <Button>+</Button>
            <Button>-</Button>
        </KeypadContainer>

    )
}
