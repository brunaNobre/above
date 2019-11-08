import React, { Component } from "react";
import {subDays} from 'date-fns';
import {formatDistance} from 'date-fns/esm'
import {pt} from 'date-fns/esm/locale'
import getPhase from '../../utils/getPhase'
import sunSign from '../../utils/sunSign'
import moonSign from '../../utils/moonSign'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


class AbvCalendarWidget extends Component {
    constructor() {
        super();
        this.state = {
            currentMonth: new Date(),
            selectedDate: new Date(),
            open: {},
            isMercuryRetrograde: false
          };
        this.renderHeader = this.renderHeader.bind(this)    
        this.renderDays = this.renderDays.bind(this)    
        this.renderCells = this.renderCells.bind(this)   
        this.nextMonth = this.nextMonth.bind(this)    
        this.prevMonth = this.prevMonth.bind(this)  
        this.openDialog = this.openDialog.bind(this)    
        this.closeDialog = this.closeDialog.bind(this)
        this.sendAndClose = this.sendAndClose.bind(this)  

    }




    translatePhase (phase) {
        switch (phase) {
            case "new":
            return "Nova";
            break;
            case "waxing":
            return "Crescente";
            break;
            case "full":
            return "Cheia";
            break;
            default:
            return "Minguante";
            break;
        }
    }

    translateSign(sign) {
      switch (sign) {
          case "aries":
          return "Áries";
          break;
          case "taurus":
          return "Touro";
          break;
          case "gemini":
          return "Gêmeos";
          break;
          case "cancer":
          return "Câncer";
          break;
          case "leo":
          return "Leão";
          break;
          case "virgo":
          return "Virgem";
          break;
          case "libra":
          return "Libra";
          break;
          case "scorpio":
          return "Escorpião";
          break;
          case "sagitarius":
          return "Sagitário";
          break;
          case "capricorn":
          return "Capricórnio";
          break;
          case "aquarius":
          return "Aquário";
          break;          
          default:
          return "Peixes";
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
        const moonsign = moonSign(cloneDay);
          

        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => {this.openDialog(cloneDay, cloneDay)}}
          >

            {(getPhase(subDays(cloneDay, 1)) != phase) ? <i title={`Fase ${this.translatePhase(phase)}`} className={`cel-phase-icon ${phase}-icon`}></i> : ""}
    
            <span className="number">{formattedDay}</span>
          </div>
        );

        let dayOfWeek = dateFns.format(day, "EEEE", {locale: pt});
        day = dateFns.addDays(day, 1);

        //let isFriday = (dayOfWeek == "sexta-feira") ? <p className="isfriday">Sextou!</p> : "";
        
        dialogs.push(
          <Dialog key={cloneDay} className="calendar-dialog" aria-labelledby="simple-dialog-title" open={this.state.open[cloneDay] || false}>
            <CloseIcon className="close-dialog" onClick={() => {this.closeDialog(cloneDay)}}/>
            <DialogTitle className="title">{`${dayOfWeek}, ${formattedDay} de ${month} de ${year}`}</DialogTitle>
            <p className="sign-ofDay">Sol em <span>{sunSign(`${formattedDay} de ${month} de ${year}`)}</span></p>
            <p className="moon-ofDay">Lua <span>{this.translatePhase(phase)}</span> em <span className="moon-sign-name">{this.translateSign(moonsign)}</span></p>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
              <Typography >Nova tarefa</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <input name="title" type="text" onChange={(e) => {this.props.sendInputValue('title', e.target.value)}}/>
              </ExpansionPanelDetails>
              <button className="send-button" onClick={() => {this.sendAndClose(cloneDay, this.props.newTask,
                 `${dateFns.format(this.state.selectedDate, "yyyy", {locale: pt})}-${dateFns.format(this.state.selectedDate, "L", {locale: pt})}-${dateFns.format(this.state.selectedDate, "d", {locale: pt})}`)}}>
                 Salvar
              </button>
          </ExpansionPanel>
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

  openDialog (key, day) {
    let obj = {...this.state.open}
    obj[key] = true;
    this.setState({
      open: obj,
      selectedDate: day
    })

    fetch('https://mercuryretrogradeapi.com?date=2016-09-14', { mode: 'cors' })
      .then(res => res.json())
      .then(({is_retrograde}) => {console.log({is_retrograde})})

  }
  
  closeDialog (key) {
    let obj = {...this.state.open}
    obj[key] = false;
    this.setState({
      open: obj,
      selectedDate: new Date()
    })
  }
  
  sendAndClose(key, task, date) {
    this.closeDialog(key);
    this.props.addTaskFromWidget(task, date);
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