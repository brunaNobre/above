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

      <div>
        <Router>
          <Switch>

            <Route exact path='/home' component={AboveMainContent}/>


          </Switch>

        </Router>
          

      </div>
    
    )
  }
}

ReactDOM.render(<AboveApp />, document.getElementById('above-app'))