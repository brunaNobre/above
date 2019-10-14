import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AboveMainContent from './layout/AboveMainContent'


class AboveApp extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <AboveMainContent />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<AboveApp />, document.getElementById('above-app'))