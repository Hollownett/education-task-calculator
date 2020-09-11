import React from 'react'

import {
  Header as AppHeader,
  Title,
  Links,
} from './componets'

export default class Header extends React.Component {
  render() {
    return (
      <AppHeader>
        <Title> Calculator app</Title>
        <div className="header-links">
          <Links to="/classes">Home</Links>
          <Links to="/classes/settigns">Settigns</Links>
        </div>
      </AppHeader>
    )
  }
}
