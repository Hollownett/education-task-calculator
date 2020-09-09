import React from 'react'

import theme from '@/theme'

import { Button, KeypadContainer } from './components'

export default ({ handleClick }) => {
  return (
    <KeypadContainer>
      <Button onClick={() => handleClick('0')}>0</Button>
      <Button onClick={() => handleClick('1')}>1</Button>
      <Button onClick={() => handleClick('2')}>2</Button>
      <Button onClick={() => handleClick('3')}>3</Button>
      <Button onClick={() => handleClick('4')}>4</Button>
      <Button onClick={() => handleClick('5')}>5</Button>
      <Button onClick={() => handleClick('6')}>6</Button>
      <Button onClick={() => handleClick('7')}>7</Button>
      <Button onClick={() => handleClick('8')}>8</Button>
      <Button onClick={() => handleClick('9')}>9</Button>
      <Button onClick={() => handleClick('(')}>(</Button>
      <Button onClick={() => handleClick(')')}>)</Button>
      <Button onClick={() => handleClick('+')}>+</Button>
      <Button onClick={() => handleClick('*')}>*</Button>
      <Button onClick={() => handleClick('/')}>/</Button>
      <Button onClick={() => handleClick('-')}>-</Button>
      <Button onClick={() => handleClick('=')}>=</Button>
      <Button onClick={() => handleClick('C')}>C</Button>
      <Button onClick={() => handleClick('CE')}>CE</Button>
    </KeypadContainer>
  )
}
