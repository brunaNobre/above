import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Radio from '@material-ui/core/Radio';
import color from '@material-ui/core/colors/red';
import { func } from 'prop-types';
import formatMonth from './formatMonth'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function TasksList(props) {
  const classes = useStyles();
  const tasksList = props.tasks;
  const date = props.date;
  let toDo = 0;

 

  const listItems = tasksList.map(function(task) {
    
    const splited = task.due_to.split('-');
    const year = splited[0];
    const month = splited[1];
    const day = splited[2];
    const taskDueTo = day+ " de "+ formatMonth(month) + " de "+ year;

    if(!task.is_completed && (taskDueTo == date)) {
      toDo = toDo + 1;
       return (
        <ListItem key={task.id} >
          <Radio style={{color:"gray"}} checked={!!task.is_completed} onClick={() => {props.handleUpdate(task)}}/>
          <ListItemText primary={task.title} />
        </ListItem>
        
      )

    } 
   
  });  


  return (

    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
      {listItems}
      </List>
     
    </div>
  );
}