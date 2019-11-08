import React, { Component } from 'react'
import NewTaskDialog from '../components/layouts/NewTaskDialog'
import formatDate from '../utils/formatDate'
import moonSign from '../utils/moonSign'
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
            moonsign: "",
            newTask: {
                user_id: 0,
                title: "",
                due_to: formatDate(new Date().toLocaleDateString())
            },
            is_retrograde: false,
        }

        this.handleAdd = this.handleAdd.bind(this)    
        this.sendInputValue = this.sendInputValue.bind(this)
        this.addTaskFromWidget = this.addTaskFromWidget.bind(this)
        this.clickOnCell = this.clickOnCell.bind(this)

    }

    componentDidMount() {
        var today_date = new Date(formatDate(new Date().toLocaleDateString()))
        this.setState({
            phase: getPhase(today_date),
            moonsign: moonSign(today_date)
        });

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


    clickOnCell() {
        fetch('https://mercuryretrogradeapi.com?date=2016-09-14', { mode: 'cors' })
        .then(res => res.json())
        .then(({is_retrograde}) => {console.log(is_retrograde)})
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
             <MoonHeader 
             phase={this.state.phase} 
             moonsign={this.state.moonsign}
             onClick={() => {this.clickOnCell()}}
             />
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