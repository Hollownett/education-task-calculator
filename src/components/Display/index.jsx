import React from 'react'

import { Display, DisplayContainer } from './components'

export default ({ expr }) => {
  return (
    <DisplayContainer>
      <Display>{expr}</Display>
    </DisplayContainer>
  )
}
