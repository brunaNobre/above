import React, { Component } from "react";
import {subDays} from 'date-fns';
import {formatDistance} from 'date-fns/esm'
import {pt} from 'date-fns/esm/locale'
import getPhase from '../../utils/getPhase'

class AbvCalendarWidget extends Component {
    constructor() {
        super();
        this.state = {
            currentMonth: new Date(),
            selectedDate: new Date()
          };
        this.renderHeader = this.renderHeader.bind(this)    
        this.renderDays = this.renderDays.bind(this)    
        this.renderCells = this.renderCells.bind(this)   
        this.onDateClick = this.onDateClick.bind(this)    
        this.nextMonth = this.nextMonth.bind(this)    
        this.prevMonth = this.prevMonth.bind(this)    



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
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >

            {(getPhase(subDays(cloneDay, 1)) != getPhase(cloneDay)) ? <i title={`Fase ${this.translatePhase(getPhase(cloneDay))}`} className={`cel-phase-icon ${getPhase(cloneDay)}-icon`}></i> : ""}
          

             

            <span className="number">{formattedDate}</span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick (day)  {
    this.setState({
      selectedDate: day
    });
  };

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