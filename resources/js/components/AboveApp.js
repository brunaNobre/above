import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Panel from './Panel'
import MoonHeader from './MoonHeader'
import AbvCalendar from './AbvCalendar'

class AboveApp extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Panel />
          <MoonHeader />
          <AbvCalendar />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<AboveApp />, document.getElementById('above-app'))