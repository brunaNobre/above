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

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function CompletedTasksPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Concluídas (3)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List>
            <ListItem button>
                <ListItemIcon>
                    <DoneIcon />
                </ListItemIcon>
                <ListItemText primary="Tarefa Incrível" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon>
                    <DoneIcon />
                </ListItemIcon>
                <ListItemText primary="Tarefa Importante" />
            </ListItem>

          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
 
    </div>
  );
}