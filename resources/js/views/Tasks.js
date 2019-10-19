import React, { Component } from 'react'
import TasksHeader from '../components/Tasks/TasksHeader'
import TasksList from '../components/Tasks/TasksList'
import CompletedTasksPanel from '../components/Tasks/CompletedTasksPanel'

class Tasks extends Component {
    render() {
        return (
            <div className="tasks-view">
                <TasksHeader />
                <TasksList />
                <CompletedTasksPanel />
            </div>
        )
    }
}

export default Tasks