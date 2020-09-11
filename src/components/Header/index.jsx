import React from 'react'

import {
  Header as AppHeader,
  Title,
  Links,
} from './componets'

export default () => {
  return (
    <AppHeader>
      <Title> Calculator app</Title>
      <div className="header-links">
        <Links to="/">Home</Links>
        <Links to="/settigns">Settigns</Links>
      </div>
    </AppHeader>
  )
}
