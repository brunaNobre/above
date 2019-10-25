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

  

  const listItems = tasksList.map(function(task) {

    if(!task.is_completed) {
      
      return (
        <ListItem key={task.id} >
          <Radio style={{color:"gray"}} checked={!!task.is_completed} onClick={() => {props.handleUpdate(task)}}/>
          <ListItemText primary={task.title}/>
        </ListItem>
      )

    } 
   
  });  

  return (

    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        { listItems }
      </List>
      <Divider />
     
    </div>
  );
}