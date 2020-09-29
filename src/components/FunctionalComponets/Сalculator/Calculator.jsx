import React from 'react'

import Display from './Display'
import Keypad from './Keypad'
import Histrory from './History'

import { useDispatch, useSelector } from 'react-redux'

import {
  CalculatorContainer,
  ControlPanelContainer,
  Line,
} from './components'

import {
  calculate,
  setExpression,
  clearExpression,
  clearElement,
} from '@/actions'

function Calculator() {
  const calculator = useSelector(state => state.calculator)
  const { expr, history } = calculator
  const dispatch = useDispatch()

  const handleClick = key => {
    switch (key) {
      case '=':
        return dispatch(calculate(expr))
      case 'C':
        return dispatch(clearExpression())
      case 'CE':
        return dispatch(clearElement())
      default:
        return dispatch(setExpression(key))
    }
  }

  return (
    <CalculatorContainer>
      <ControlPanelContainer>
        <Display expr={expr} />
        <Line horizontal />
        <Keypad handleClick={handleClick} />
      </ControlPanelContainer>
      <Line vertical />
      <Histrory history={history} />
    </CalculatorContainer>
  )
}

export default Calculator
