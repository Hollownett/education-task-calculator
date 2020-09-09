import React, { useEffect } from 'react'

import { PageLayout } from '@/layouts'
import Keypad from '@/components/Keypad'
import Histrory from '@/components/History'
import Display from '@/components/Display'
import { Card } from './components'
import Header from '@/components/Header'

import { calculate, setExpression } from '@/actions/index'
import { useDispatch, useSelector } from 'react-redux'

export default () => {
  const calculator = useSelector(state => state.calculator)
  const { expr, history } = calculator
  const dispatch = useDispatch()

  useEffect(() => {})

  const handleClick = key => {
    if (key === '=') dispatch(calculate(expr))
    else dispatch(setExpression(key))
  }

  return (
    <PageLayout>
      <Card>
        <Header />
        <div
          className="calculator-container"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}>
          <div
            className="control-container"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}>
            <Display expr={expr} />
            <div
              className="horizontal-line"
              style={{
                height: '0px',
                width: '100%',
                border: '2px solid #707070',
                opacity: '1',
                marginBottom: '1rem',
              }}
            />
            <Keypad handleClick={handleClick} />
          </div>
          <div
            className="vertical-line"
            style={{
              height: '100%',
              width: '0px',
              border: '2px solid #707070',
              opacity: '1',
              marginLeft: '1rem',
            }}
          />
          <Histrory history={history} />
        </div>
      </Card>
    </PageLayout>
  )
}
