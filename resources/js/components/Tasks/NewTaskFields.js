import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import AbvDatePicker from '../../components/AbvDatePicker'


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(6),

    width: 500,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));



export default function NewTaskFields(props) {
  const classes = useStyles();
  

 
  return (
    <form className={classes.container} noValidate autoComplete="off" >
        
      <TextField
        name="title"
        id="standard-password-input"
        label="Pra fazer"
        className={classes.textField}
        type="text"
        margin="normal"
        autoFocus={true}
        onChange={(e) => {props.sendInputValue('title', e.target.value)}}
      />

      <AbvDatePicker sendInputValue={props.sendInputValue}/>
         
    </form>
  );
}