import React, { Component } from 'react'
import TaskDate from './TaskDate'
import sunSign from '../../utils/sunSign'

class TasksHeader extends Component {
    render() {
        return (
            <div className="tasks-header">
                <TaskDate 
                date={this.props.date} 
                nextDay={this.props.nextDay} 
                prevDay={this.props.prevDay}
                backToPresent={this.props.backToPresent}
                />

                <h4 className="sun-sign-of-day">Sol em <span>{sunSign(this.props.date)}</span></h4>
                <div className="transit-changes">
                    <img src=""></img>
                    <img src=""></img>
                </div>
            </div>
        )
    }
}

export default TasksHeader