import React from 'react'

import { Button, KeypadContainer } from './components'
import { keypad } from '@/constants/keypad'
export default ({ handleClick }) => {
  return (
    <KeypadContainer>
      {keypad.map((key, index) => (
        <Button onClick={() => handleClick(key)}>
          {key}
        </Button>
      ))}
    </KeypadContainer>
  )
}
