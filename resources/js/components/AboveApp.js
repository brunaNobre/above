import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link 
} from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';


import AboveMainContent from './layouts/AboveMainContent'
import AboveHeader from './layouts/AboveHeader'

import Moons from '../views/Moons'
import NatalChart from '../views/NatalChart'
import Planets from '../views/Planets'
import Signs from '../views/Signs'
import Tasks from '../views/Tasks'
import TodaySky from '../views/TodaySky'
import UserMood from '../views/UserMood'



class AboveApp extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    axios.get('/api/user')
    .then(res => {
        this.setState({user: res.data});
    });
  }



  render () {
    return (

      <>  
        <CssBaseline />


        <Router>
          <AboveHeader user={this.state.user}/>
          


          <Switch>
            <Route exact path='/home' component={AboveMainContent}/>
            <Route path='/home/moons' component={Moons}/>
            <Route path='/home/natal-chart' component={NatalChart}/>
            <Route path='/home/planets' component={Planets}/>
            <Route path='/home/signs' component={Signs}/>
            <Route path='/home/tasks' component={Tasks}/>
            <Route path='/home/today-sky' component={TodaySky}/>
            <Route path='/home/user-mood' component={UserMood}/>
          </Switch>



        </Router>
          

      </>
    
    )
  }
}

ReactDOM.render(<AboveApp />, document.getElementById('above-app'))