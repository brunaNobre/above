import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import EventIcon from '@material-ui/icons/Event';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';

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

      <BottomNavigationAction label="Tarefas" icon={<AssignmentTurnedInIcon />} component={Link} to={"/home/tasks"}/>
      <BottomNavigationAction label="Calendário" icon={<EventIcon />} component={Link} to={"/home/calendar"}/>
      <BottomNavigationAction label="Céu de hoje" icon={<BubbleChartIcon />} component={Link} to={"/home/today-sky"}/>
    </BottomNavigation>
    </div>
  );
}