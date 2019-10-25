import React, { Component } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function TaskDate (props) {

        const date = props.date.toString()

         return (
                <div className="task-date">
                    <ArrowBackIosIcon className="nav-arrow arrow-back" onClick={props.prevDay}/>
                    <p>
                        {date}
                    </p>
                    <span className="today-button">voltar pra hoje</span>
                    <ArrowForwardIosIcon className="nav-arrow arrow-for" onClick={props.nextDay}/>
                </div>
        )
    
}

export default TaskDate