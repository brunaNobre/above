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

export default function TasksList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <Radio style={{color:"gray"}}/>
          <ListItemText primary="Tarefa Fácil" />
        </ListItem>
        <Divider />

        <ListItem button>
          <Radio style={{color:"gray"}}/>
          <ListItemText primary="Tarefa Legal" />
        </ListItem>
        <Divider />

        <ListItem button>
          <Radio style={{color:"gray"}}/>
          <ListItemText primary="Os doze trabalhos de Hércules" />
        </ListItem>
      </List>
      <Divider />
     
    </div>
  );
}