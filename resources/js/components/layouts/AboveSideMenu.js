import React from 'react'
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


function AboveSideMenu () {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

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
                <MenuItem><Link to="/home/tasks" className="abv-sidemenu-link"><AssignmentTurnedInIcon />Tarefas</Link></MenuItem>
                <MenuItem><Link to="/home/planets" className="abv-sidemenu-link">Planetas</Link></MenuItem>
                <MenuItem><Link to="/home/signs" className="abv-sidemenu-link">Signos</Link></MenuItem>
                <MenuItem><Link to="/home/moons" className="abv-sidemenu-link"><Brightness3Icon />Lua</Link></MenuItem>
                <MenuItem><Link to="/home/natal-chart" className="abv-sidemenu-link">Mapa Astral</Link></MenuItem>
                <MenuItem><Link to="/home/user-mood" className="abv-sidemenu-link"><MoodIcon />Meu mood</Link></MenuItem>
                <MenuItem className="abv-sidemenu-link">Sair</MenuItem>
            </Menu>
        </div>
    )
}

export default AboveSideMenu