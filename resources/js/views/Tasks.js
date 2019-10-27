import React, { Component } from 'react'
import TasksHeader from '../components/Tasks/TasksHeader'
import TasksList from '../components/Tasks/TasksList'
import CompletedTasksPanel from '../components/Tasks/CompletedTasksPanel'
import NewTaskForm from "../components/Tasks/NewTaskForm"
import moment from 'moment'
import formatDate from '../utils/formatDate'
import TasksListDatePicker from '../components/Tasks/TasksListDatePicker'


class Tasks extends Component {
    constructor() {
        super()
        this.state = {
            tasks: [],
            date: moment().locale('pt-br').format('LL'),
            daysForward: 0,
            daysBackward: 0,
            newTask: {
                user_id: 1,
                title: "",
                due_to: formatDate(new Date().toLocaleDateString())
            },
        }

        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.nextDay = this.nextDay.bind(this)
        this.prevDay = this.prevDay.bind(this)
        this.backToPresent = this.backToPresent.bind(this)
        this.sendInputValue = this.sendInputValue.bind(this)


    }



    componentDidMount() {
        axios.get(`/api/tasks`)
          .then(res => {
             this.setState({
                 tasks: res.data,
                })
          })   
                
    }


    backToPresent() {
        this.setState({
            date: moment().locale('pt-br').format('LL'),
            daysForward: 0,
            daysBackward: 0,
    })
    }


    nextDay() {

        if (this.state.daysBackward > 0) {
            this.setState({
                daysBackward: (this.state.daysBackward - 1),
                date: moment().locale('pt-br').subtract((this.state.daysBackward) - 1, 'days').format('LL'),
            })

        } else {
            this.setState({
                daysForward: (this.state.daysForward + 1),
                date: moment().locale('pt-br').add((this.state.daysForward) + 1, 'days').format('LL')
            })
        }
    }


    prevDay() {
        if (this.state.daysForward > 0) {
            this.setState({
                daysForward: (this.state.daysForward - 1),
                date: moment().locale('pt-br').add((this.state.daysForward) - 1, 'days').format('LL')
            })
        } else {
            this.setState({
                daysBackward: (this.state.daysBackward + 1),
                date: moment().locale('pt-br').subtract((this.state.daysBackward) + 1, 'days').format('LL')
            })
        }

    }

    handleAdd (newTask) {
        if(newTask.title) {
            axios.post('/api/tasks', newTask);
            axios.get(`/api/tasks`)
            .then(res => {
            this.setState({
                 tasks: res.data
                 })
            })

            this.setState({
                newTask: {
                    user_id: 1,
                    title: "",
                    due_to: formatDate(new Date().toLocaleDateString())
                }
            }) 
       }
    };


    sendInputValue (key, newValue) {
        this.setState((state) => state.newTask[key] = newValue)
    }

   


     handleUpdate (task) {
        task.is_completed = !task.is_completed;
        axios.put('/api/tasks/' + task.id, task)
        .then(res => {
            let updatedTask = res.data;
            let tasks = [...this.state.tasks]
            let el = tasks.find((el) => {el.id == updatedTask.id})
            let index = tasks.indexOf(el);
            tasks[index] = updatedTask;

            this.setState({tasks: tasks})
        })
       
        
    };


    render() {

        return (
            <div className="tasks-view">
                <TasksHeader 
                date={this.state.date}
                nextDay={this.nextDay} 
                prevDay={this.prevDay}
                 backToPresent={this.backToPresent}
                 />
                <TasksList 
                tasks={this.state.tasks}
                 handleUpdate={this.handleUpdate}
                 date={this.state.date}
                 />
                <CompletedTasksPanel 
                tasks={this.state.tasks} 
                handleUpdate={this.handleUpdate}
                date={this.state.date}/>
                <NewTaskForm 
                newTask={this.state.newTask} 
                sendInputValue={this.sendInputValue}
                handleAdd={this.handleAdd}
                />
                <TasksListDatePicker />
            </div>
        )
    }
}

export default Tasks