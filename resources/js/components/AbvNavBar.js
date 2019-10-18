import React from 'react'
import { 
    BrowserRouter as Router,
    Route,
    Switch,
    Link 
  } from 'react-router-dom'
import TodaySkyIcon from '../icons/TodaySkyIcon'

function AbvNavBar () {
    return (
        <ul className="abv-navbar">
            <li><Link to="/home/tasks">Tarefas</Link></li>
            <li><Link to="/home/planets">Planetas</Link></li>
            <li><Link to="/home/signs">Signos</Link></li>
            <li><Link to="/home/moons">Lua</Link></li>
            <li><Link to="/home/natal-chart">Mapa Astral</Link></li>
            <li><Link to="/home/user-mood">Meu mood</Link></li>
            <li><Link to="/home/today-sky"><TodaySkyIcon></TodaySkyIcon></Link></li>
        </ul>
    )
}

export default AbvNavBar