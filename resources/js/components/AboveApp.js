import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link 
} from 'react-router-dom'

import AboveMainContent from './layout/AboveMainContent'


class AboveApp extends Component {
  render () {
    return (
      <Router>
        <div>
          
          <AboveMainContent />
         
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<AboveApp />, document.getElementById('above-app'))