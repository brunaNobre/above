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
import formatMonth from '../../utils/formatMonth'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';


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
  let taskDueTo;



  const listItems = tasksList.map(function(task) {
    const splited = task.due_to.split('-');
    const year = splited[0];
    const month = splited[1];
    let day = splited[2];
    if(day < 10) {day = day.split('0')[1];}
    const user_id = props.user.id;
    
    taskDueTo = day+ " de "+ formatMonth(month) + " de "+ year;

    if(!task.is_completed && (taskDueTo == date) && (task.user_id == user_id)) {
      toDo = toDo + 1;

      let key = "open_"+task.id;

       return (
         <div key={task.id}>
        <ListItem className="incompleted-task-item">
          <Radio style={{color:"gray"}} checked={!!task.is_completed} onClick={() => {props.handleUpdate(task)}}/>
          <ListItemText primary={task.title} onClick={() => {props.openTaskModal(task.id)}}/>
        </ListItem>
        <Dialog className="see-task-dialog" aria-labelledby="simple-dialog-title" open={props.open[key] || false}>
         <CloseIcon className="see-task-close" onClick={() => {props.closeTaskModal(task.id)}}/>
         <h4 className="see-task-heading">Tarefa:</h4>
          <DialogTitle className="see-task-title" id={task.id}>{task.title}</DialogTitle>
          <DeleteIcon className="see-task-delete" onClick={() => {props.handleDelete(task.id)}}/>
        </Dialog>
        </div>
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

