import React, { Component } from 'react'
import ReactDOM from 'react-dom'


import AboveMainContent from './layout/AboveMainContent'


class AboveApp extends Component {
  render () {
    return (
        <div>
          
          <AboveMainContent />
         
        </div>
    )
  }
}

ReactDOM.render(<AboveApp />, document.getElementById('above-app'))