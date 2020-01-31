import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { 
    BrowserRouter as Router,
    Route,
    Switch,
    Link 
  } from 'react-router-dom'

import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';  
import Brightness3Icon from '@material-ui/icons/Brightness3';  
import MoodIcon from '@material-ui/icons/Mood';
import NatalChartIcon from '../../icons/NatalChartIcon'
import PlanetsIcon from '../../icons/PlanetsIcon'
import SignsIcon from '../../icons/SignsIcon'

import AbvSideMenuHeader from '../AbvSideMenuHeader'


function AboveSideMenu (props) {


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {  
        setAnchorEl(null);
      };

    const logout = () => {
        axios.post('/logout'); 
    }
     


    return (
        <div className="abv-sidemenu-wrapper">
            <Button className="abv-open-sidemenu-button" aria-controls="abv-sidemenu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
            </Button>
            <Menu 
            id="abv-sidemenu"
            className="abv-sidemenu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
     
            >
                <AbvSideMenuHeader
                 user={props.user}
                 firstName={props.firstName}
                 avatar={props.avatar}
                 uploadUserImage={props.uploadUserImage}
                 sendInputImage={props.sendInputImage}
                 />
                <MenuItem onClick={handleClose}><Link to="/home/tasks" className="abv-sidemenu-link" id="first-item"><AssignmentTurnedInIcon className="abv-sidemenu-icon" />Tarefas</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/home/planets" className="abv-sidemenu-link"><PlanetsIcon />Planetas</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/home/signs" className="abv-sidemenu-link"><SignsIcon />Signos</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/home/moons" className="abv-sidemenu-link"><Brightness3Icon className="abv-sidemenu-icon" />Lua</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/home/natal-chart" className="abv-sidemenu-link"><NatalChartIcon />Mapa Astral</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/home/user-mood" className="abv-sidemenu-link"><MoodIcon className="abv-sidemenu-icon" />Meu mood</Link></MenuItem>
                <MenuItem onClick={handleClose} className="abv-sidemenu-link">
                    <a href="/login" onClick={logout} className="logout-link">Sair</a>
                </MenuItem>
            </Menu>
        </div>
    )
}



export default AboveSideMenu