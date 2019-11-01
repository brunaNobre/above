import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function AllMoods(props) {
  const classes = useStyles();
  let dayFeellingsList =  <CircularProgress className="loading"/>;
  let userFeellingsList = <CircularProgress className="loading"/>;
 
  if(Array.isArray(props.dayFeellings)) {
    dayFeellingsList = (props.dayFeellings).map(function(f){
      return (
        <ListItem key={f.id}>
          <ListItemText primary={f.name} />
        </ListItem>
      )
      
    });
  }




  function totalFeellingsPercent() {
    if(Array.isArray(props.userFeellings)) {
      const count = {};
      (props.userFeellings).forEach(function(feelling) { count[feelling.name] = (count[feelling.name] ||0) + 1;});
      console.log("count: ")
      console.log(count);
    }


  }
  
  totalFeellingsPercent();  


  return (
    <div>
      <Paper className={classes.root + " moods-today"}>
        <Typography variant="h5" component="h3">
          Hoje
        </Typography>

        <List component="nav" aria-label="main mailbox folders">
        {dayFeellingsList}
        </List>
      
       
      </Paper>
      <Paper className={classes.root + " top-moods"}>
        <Typography variant="h5" component="h3">
          O que eu mais sinto
        </Typography>
        <List component="nav" aria-label="main mailbox folders">
        {userFeellingsList}
        </List>
       
      </Paper>
    </div>
  );
}