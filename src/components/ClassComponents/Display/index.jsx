import React from 'react'

import {
  Display as CalucatorDispaly,
  DisplayContainer,
} from './components'

export default class Display extends React.Component {
  render() {
    return (
      <DisplayContainer>
        <CalucatorDispaly>
          {this.props.expr}
        </CalucatorDispaly>
      </DisplayContainer>
    )
  }
}
