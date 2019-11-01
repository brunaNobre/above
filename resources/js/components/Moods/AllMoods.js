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
 
  // if dayFeellings state was loaded
  if(Array.isArray(props.dayFeellings)) {
    dayFeellingsList = (props.dayFeellings).map(function(f){
      return (
        <ListItem key={f.id}>
          <ListItemText primary={f.name} />
        </ListItem>
      )
      
    });
  }

    // if userFeellings state was loaded
    if(Array.isArray(props.userFeellings)) {
      userFeellingsList = []
      const percentage = {}
      const count = {};
      let sum = 0;
      (props.userFeellings).forEach(function(feelling) {
         count[feelling.name] = (count[feelling.name] ||0) + 1;
        });

      for(let feelling in count) {
        sum = sum + count[feelling];
      } 

      for(let feelling in count) {
        percentage[feelling]  = (count[feelling] / sum) * 100
      }
      //sort the percentage values
      let sortedPercentages = [];
      for(let p in percentage) {
        sortedPercentages.push([p, percentage[p]]);
      }
      sortedPercentages.sort(function(a, b) {
        return b[1] - a[1];
      });

      userFeellingsList = sortedPercentages.map(function(p, i) {
        return (
          <ListItem key={i}>
            <ListItemText primary={`${p[0]}: ${p[1].toPrecision(2)}%`} />
          </ListItem>
        )
      });

    }


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