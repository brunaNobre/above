import React, { Component } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import moment from 'moment'

function TaskDate (props) {

        const date = props.date.toString()
        const today = moment().locale('pt-br').format('LL')
        const hideIfToday = (date == today) ? "hidden" : "";
        const showIfToday = (date == today) ? "" : "hidden";


         return (
                <div className="task-date">
                    <ArrowBackIosIcon className="nav-arrow arrow-back" onClick={props.prevDay}/>
                    <p>
                        {date}
                    </p>
                    <span className={"today-button " + hideIfToday} onClick={props.backToPresent}>
                    voltar pra hoje
                    </span>
                    <span className={"today-label " + showIfToday}>hoje</span>
                    <ArrowForwardIosIcon className="nav-arrow arrow-for" onClick={props.nextDay}/>
                </div>
        )
    
}

export default TaskDate