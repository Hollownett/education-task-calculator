import React from 'react'

import { connect } from 'react-redux'

import { PageLayout } from '@/layouts'
import Keypad from '@/components/ClassComponents/Keypad'
import Histrory from '@/components/ClassComponents/History'
import Display from '@/components/ClassComponents/Display'
import Header from '@/components/ClassComponents/Header'

import {
  Card,
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

class Home extends React.Component {
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
      <PageLayout>
        <Card>
          <Header />
          <CalcukatorContainer>
            <ControlPanelConteiner>
              <Display expr={this.props.expr} />
              <Line horizontal />
              <Keypad handleClick={this.onHandleClick} />
            </ControlPanelConteiner>
            <Line vertical />
            <Histrory history={this.props.history} />
          </CalcukatorContainer>
        </Card>
      </PageLayout>
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
})(Home)
