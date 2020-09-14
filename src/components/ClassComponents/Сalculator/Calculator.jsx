import React from 'react'

import { connect } from 'react-redux'

import Keypad from './Keypad'
import Histrory from './History'
import Display from './Display'

import {
  CalcukatorContainer,
  ControlPanelConteiner,
  Line,
} from './components'

import {
  calculate,
  setExpression,
  clearExpression,
  clearElement,
} from '@/actions'

class Calculator extends React.Component {
  onHandleClick = key => {
    switch (key) {
      case '=':
        return this.props.calculate(this.props.expr)
      case 'C':
        return this.props.clearExpression()
      case 'CE':
        return this.props.clearElement()
      default:
        return this.props.setExpression(key)
    }
  }

  render() {
    return (
      <CalcukatorContainer>
        <ControlPanelConteiner>
          <Display expr={this.props.expr} />
          <Line horizontal />
          <Keypad handleClick={this.onHandleClick} />
        </ControlPanelConteiner>
        <Line vertical />
        <Histrory history={this.props.history} />
      </CalcukatorContainer>
    )
  }
}
const mapStateToProps = state => ({
  expr: state.calculator.expr,
  history: state.calculator.history,
})
export default connect(mapStateToProps, {
  calculate,
  setExpression,
  clearExpression,
  clearElement,
})(Calculator)
