import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import formatDate from '../../utils/formatDate'
import moment from 'moment'

export default function TasksListDatePicker(props) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
    props.handleDatePick(formatDate(date.toLocaleDateString()));
    
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} >
      <Grid container justify="flex-start">
     
        <KeyboardDatePicker
          className="tasks-list-datepicker"
          name="due_to"
          style={{marginLeft: 8}}  
          id="date-picker-dialog"
          label=""
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