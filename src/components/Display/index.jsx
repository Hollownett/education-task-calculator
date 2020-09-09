import React from 'react'

import { Display } from './components'

export default ({ expr }) => {
  return <Display>{expr === '' ? 0 : expr}</Display>
}
