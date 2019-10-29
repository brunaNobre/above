import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { 
    BrowserRouter as Router,
    Route,
    Switch,
    Link 
  } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function AboveBottomMenu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className="abv-bottom-menu-wrapper">
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root + " abv-bottom-menu"}
    >

      <BottomNavigationAction label="Tarefas" icon={<RestoreIcon />} component={Link} to={"/home/tasks"}/>
      <BottomNavigationAction label="Calendário" icon={<FavoriteIcon />} component={Link} to={"/home/calendar"}/>
      <BottomNavigationAction label="Céu de hoje" icon={<LocationOnIcon />} component={Link} to={"/home/today-sky"}/>
    </BottomNavigation>
    </div>
  );
}