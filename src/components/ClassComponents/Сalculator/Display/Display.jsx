import React from 'react'

import {
  Display as CalucatorDispaly,
  DisplayContainer,
} from './components'

class Display extends React.Component {
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

export default Display
