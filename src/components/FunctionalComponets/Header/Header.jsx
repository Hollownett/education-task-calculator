import React from 'react'

import {
  Header as AppHeader,
  Title,
  Links,
} from './componets'

function Header() {
  return (
    <AppHeader>
      <Title> Calculator app</Title>
      <div className="header-links">
        <Links
          exact
          activeStyle={{ color: 'white' }}
          to="/">
          Home
        </Links>
        <Links
          exact
          activeStyle={{ color: 'white' }}
          to="/settigns">
          Settigns
        </Links>
      </div>
    </AppHeader>
  )
}

export default Header
