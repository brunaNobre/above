import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function AllMoods(props) {
  const classes = useStyles();
  let dayFeellingsList =  <CircularProgress className="loading"/>;
  let userFeellingsList = <CircularProgress className="loading"/>;
  let options = [{name: "..."}];


 
  // if dayFeellings state was loaded
  if(Array.isArray(props.dayFeellings)) {
    if((props.dayFeellings).length == 0) {
      dayFeellingsList = <ListItem><ListItemText primary="Você ainda não registrou nenhum sentimento hoje." /></ListItem>
    } else {
      dayFeellingsList = (props.dayFeellings).map(function(f){
        return (
          <ListItem key={f.id}>
            <ListItemText primary={f.name} />
          </ListItem>
        )
        
      });
    }

  }

  if(Array.isArray(props.feellings)) {options = props.feellings}


    // if userFeellings state was loaded
    if(Array.isArray(props.userFeellings)) {

      if((props.userFeellings).length == 0) {
        userFeellingsList =  <ListItem><ListItemText primary="Você não registrou nenhum sentimento." /></ListItem>
      } else {
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
              <ListItemText primary={`${p[0]}: ${p[1].toPrecision(3)}%`} />
            </ListItem>
          )
        });
      }



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
        <Typography variant="h5" component="h3" className="add-feelling">
        Adicionar sentimento
        </Typography>
        <Autocomplete
        className="add-feelling-input"
        options={options}
        getOptionLabel={option => option.name}
        style={{ width: 300 }}
        onChange={(e) => {props.selectFeelling(e.target.innerText)}}
        renderInput={params => (
        <TextField 
        {...params}
        variant="outlined"
        fullWidth 
        
        />
      )}
    />
          <Button onClick={() => {props.addNewFeelling()}} variant="contained" className="save">
            Salvar
          </Button>       
      </Paper>
      <Paper className={classes.root + " top-moods"}>
        <Typography variant="h5" component="h3">
          Como eu me sinto na maioria das vezes
        </Typography>
        <List component="nav" aria-label="main mailbox folders">
        {userFeellingsList}
        </List>
       
      </Paper>
    </div>
  );
}




