import React, { Component } from "react";
import {subDays} from 'date-fns';
import {formatDistance} from 'date-fns/esm'
import {pt} from 'date-fns/esm/locale'
import getPhase from '../../utils/getPhase'
import sunSign from '../../utils/sunSign'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';



class AbvCalendarWidget extends Component {
    constructor() {
        super();
        this.state = {
            currentMonth: new Date(),
            selectedDate: new Date(),
            open: {}
          };
        this.renderHeader = this.renderHeader.bind(this)    
        this.renderDays = this.renderDays.bind(this)    
        this.renderCells = this.renderCells.bind(this)   
        this.nextMonth = this.nextMonth.bind(this)    
        this.prevMonth = this.prevMonth.bind(this)  
        this.openDialog = this.openDialog.bind(this)    
        this.closeDialog = this.closeDialog.bind(this)   

    }

    translatePhase (phase) {
        switch (phase) {
            case "new":
            return "nova";
            break;
            case "waxing":
            return "crescente";
            break;
            case "full":
            return "cheia";
            break;
            default:
            return "minguante";
            break;
        }
    }

  renderHeader() {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat, {locale: pt})}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "EEEEE";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat, {locale: pt})}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "d";
    const month = dateFns.format(this.state.currentMonth, "MMMM", {locale: pt});
    const year = dateFns.format(this.state.currentMonth, "yyyy", {locale: pt});
    const rows = [];
    const dialogs = [];

    let days = [];
    let day = startDate;
    let formattedDay = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDay = dateFns.format(day, dateFormat);
        const cloneDay = day;
        const phase = getPhase(cloneDay);        

        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => {this.openDialog(cloneDay)}}
          >

            {(getPhase(subDays(cloneDay, 1)) != phase) ? <i title={`Fase ${this.translatePhase(phase)}`} className={`cel-phase-icon ${phase}-icon`}></i> : ""}
    
            <span className="number">{formattedDay}</span>
          </div>
        );

        let dayOfWeek = dateFns.format(day, "EEEE", {locale: pt});
        day = dateFns.addDays(day, 1);
        
        dialogs.push(
          <Dialog key={cloneDay} className="calendar-dialog" aria-labelledby="simple-dialog-title" open={this.state.open[cloneDay] || false}>
            <CloseIcon className="close-dialog" onClick={() => {this.closeDialog(cloneDay)}}/>
            <DialogTitle className="title">{`${dayOfWeek}, ${formattedDay} de ${month} de ${year}`}</DialogTitle>
            <p className="sign-ofDay">Sol em <span>{sunSign(`${formattedDay} de ${month} de ${year}`)}</span></p>
            <p className="moon-ofDay">Lua <span>{this.translatePhase(phase)}</span></p>
          </Dialog>
        );

      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body"><>{rows}{dialogs}</></div>;
  }

  nextMonth () {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth ()  {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  openDialog (key) {
    let obj = {...this.state.open}
    obj[key] = true;
    this.setState({open: obj})
  }
  
  closeDialog (key) {
    let obj = {...this.state.open}
    obj[key] = false;
    this.setState({open: obj})
  }
  


  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default AbvCalendarWidget;