import 'date-fns';
import {pt} from 'date-fns/esm/locale'
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import formatDate from '../utils/formatDate'

export default function AbvDatePicker(props) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
    if(props.sendInputValue) {
      props.sendInputValue('due_to', formatDate(date.toLocaleDateString()));

    }
    if(props.onDatePick) {
      props.onDatePick(formatDate(date.toLocaleDateString()));
    }
  };


  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={pt}>
      <Grid container justify="flex-start">
     
        <KeyboardDatePicker
          name="due_to"
          style={{marginLeft: 8}}  
          id="date-picker-dialog"
          label={props.label || "Pra quando?"}
          format="dd/MM/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      
      </Grid>
    </MuiPickersUtilsProvider>
  );
}