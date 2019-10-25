import React, { Component } from 'react'
import TasksHeader from '../components/Tasks/TasksHeader'
import TasksList from '../components/Tasks/TasksList'
import CompletedTasksPanel from '../components/Tasks/CompletedTasksPanel'

class Tasks extends Component {
    constructor() {
        super()
        this.state = {
            tasks: []
        }
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    componentDidMount() {

        axios.get(`/api/tasks`)
          .then(res => {
             this.setState({tasks: res.data})
          })          
    }

    updateState(data) {
        this.setState({tasks: data})
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
                <TasksHeader />
                <TasksList tasks={this.state.tasks} handleUpdate={this.handleUpdate}/>
                <CompletedTasksPanel tasks={this.state.tasks}/>
            </div>
        )
    }
}

export default Tasks