import React, { Component } from 'react'
import NewTaskDialog from '../components/layouts/NewTaskDialog'
import formatDate from '../utils/formatDate'
import Calendar from 'react-calendar'
import Panel from '../components/Panel'
import getPhase from '../utils/getPhase'
import MoonHeader from '../components/MoonHeader'
import AbvCalendarWidget from '../components/AbvCalendar/AbvCalendarWidget'




class AbvCalendar extends Component {
    constructor() {
        super()
        this.state = {
            phase: "",
            newTask: {
                user_id: 0,
                title: "",
                due_to: formatDate(new Date().toLocaleDateString())
            }
        }

        this.handleAdd = this.handleAdd.bind(this)    
        this.sendInputValue = this.sendInputValue.bind(this)
        this.addTaskFromWidget = this.addTaskFromWidget.bind(this)
    }

    componentDidMount() {
        var today_date = new Date(formatDate(new Date().toLocaleDateString()))
        this.setState({phase: getPhase(today_date)});

          axios.get(`/api/user`)
          .then(res => {
            this.setState({
                newTask: {
                    user_id: res.data.id,
                    title: "",
                    due_to: formatDate(new Date().toLocaleDateString())
                },
            })
          })

        }


    handleAdd (newTask) {
        if(newTask.title) {
            axios.post('/api/tasks', newTask);
            
            //clear newTask
            this.setState({
                newTask: {
                    user_id: this.state.newTask.user_id,
                    title: "",
                    due_to: formatDate(new Date().toLocaleDateString())
                }
            }) 
       }
    };


    sendInputValue (key, newValue) {
        this.setState((state) => state.newTask[key] = newValue);
    }

    addTaskFromWidget(newTask, date) {
        if(newTask.title) {
            newTask.due_to = date;
            axios.post('/api/tasks', newTask);
            
            //clear newTask
            this.setState({
                newTask: {
                    user_id: this.state.newTask.user_id,
                    title: "",
                    due_to: formatDate(new Date().toLocaleDateString())
                }
            }) 
       }
    }

    render() {
        return (
            <div className="calendar-view-wrapper">
             <Panel />
             <div className="calendar-view">
             <MoonHeader phase={this.state.phase}/>
              <AbvCalendarWidget
              newTask={this.state.newTask}  
              addTaskFromWidget={this.addTaskFromWidget}
              sendInputValue={this.sendInputValue}
               />  
                <NewTaskDialog
                    newTask={this.state.newTask} 
                    sendInputValue={this.sendInputValue}
                    handleAdd={this.handleAdd}
                    />
                </div>
            </div>
            
            
        )
    }
}

export default AbvCalendar