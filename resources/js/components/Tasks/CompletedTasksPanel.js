import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DoneIcon from '@material-ui/icons/Done';
import formatMonth from './formatMonth'


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function CompletedTasksPanel(props) {
  const classes = useStyles();

  const date = props.date;
  const tasksList = props.tasks;
  const completedTasks = tasksList.filter(task => task.is_completed);
  let count = 0;
  
    const listItems = completedTasks.map(function(task) {

    const splited = task.due_to.split('-');
    const year = splited[0];
    const month = splited[1];
    const day = splited[2];
    const taskDueTo = day+ " de "+ formatMonth(month) + " de "+ year;

  if(date == taskDueTo) {
    count = count + 1;
    return (
      <ListItem button key={task.id}>
        <ListItemIcon>
            <DoneIcon onClick={() => {props.handleUpdate(task)}}/>
        </ListItemIcon>
        <ListItemText className="completed-task-item" primary={task.title}/>
      </ListItem>
    )
  }
    

    

  });  

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Concluídas ({count})</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List>
            { listItems }       
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
 
    </div>
  );
}