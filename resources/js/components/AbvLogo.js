import React from 'react'
import { 
    BrowserRouter as Router,
    Route,
    Switch,
    Link 
  } from 'react-router-dom'

function AbvLogo () {
    return (
            <Link to="/home" className="abv-logo">above</Link>

    )
}

export default AbvLogo