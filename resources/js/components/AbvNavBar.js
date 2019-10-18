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
            <li style={{left: "17vw"}}><Link to="/home/tasks">Tarefas</Link></li>
            <li style={{left: "23.5vw"}}><Link to="/home/planets">Planetas</Link></li>
            <li style={{left: "31vw"}}><Link to="/home/signs">Signos</Link></li>
            <li style={{left: "37vw"}}><Link to="/home/moons">Lua</Link></li>
            <li style={{left: "41vw"}}><Link to="/home/natal-chart">Mapa Astral</Link></li>
            <li style={{left: "51vw"}}><Link to="/home/user-mood" style={{color: "#8344E0"}}>Meu mood</Link></li>
            <li style={{left: "60vw"}}><Link to="/home/today-sky"><TodaySkyIcon></TodaySkyIcon></Link></li>
        </ul>
    )
}

export default AbvNavBar