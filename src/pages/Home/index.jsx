import React, { useEffect } from 'react'

import { PageLayout } from '@/layouts'
import Keypad from '@/components/Keypad'
import Histrory from '@/components/History'
import Display from '@/components/Display'
import { Card, CalcukatorContainer, ControlPanelConteiner, Line } from './components'
import Header from '@/components/Header'

import { calculate, setExpression, clearExpression, clearElement } from '@/actions/index'
import { useDispatch, useSelector } from 'react-redux'

export default () => {
  const calculator = useSelector(state => state.calculator)
  const { expr, history } = calculator
  const dispatch = useDispatch()

  useEffect(() => { })

  const handleClick = key => {
    switch (key) {
      case "=": return dispatch(calculate(expr))
      case "C": return dispatch(clearExpression())
      case "CE": return dispatch(clearElement(expr))
      default: return dispatch(setExpression(key))
    }
  }

  return (
    <Card>
      <Header />
      <CalcukatorContainer>
        <ControlPanelConteiner>
          <Display expr={expr} />
          <Line horizontal />
          <Keypad handleClick={handleClick} />
        </ControlPanelConteiner>
        <Line vertical />
        <Histrory history={history} />
      </CalcukatorContainer>
    </Card>
  )
}
