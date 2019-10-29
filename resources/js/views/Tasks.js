import React, { Component } from 'react'
import TasksHeader from '../components/Tasks/TasksHeader'
import TasksList from '../components/Tasks/TasksList'
import CompletedTasksPanel from '../components/Tasks/CompletedTasksPanel'
import NewTaskForm from "../components/Tasks/NewTaskForm"
import moment from 'moment'
import formatDate from '../utils/formatDate'
import formatMonth from '../utils/formatMonth'
import daysFromNow from '../utils/daysFromNow'
import TasksListDatePicker from '../components/Tasks/TasksListDatePicker'
import Panel from '../components/Panel'



class Tasks extends Component {
    constructor() {
        super()
        this.state = {
            tasks: [],
            date: moment().locale('pt-br').format('LL'),
            daysForward: 0,
            daysBackward: 0,
            newTask: {
                user_id: 0,
                title: "",
                due_to: formatDate(new Date().toLocaleDateString())
            },
            taskModalOpen: {open: false},
            user: {},
        }

        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.nextDay = this.nextDay.bind(this)
        this.prevDay = this.prevDay.bind(this)
        this.backToPresent = this.backToPresent.bind(this)
        this.sendInputValue = this.sendInputValue.bind(this)
        this.openTaskModal = this.openTaskModal.bind(this)
        this.closeTaskModal = this.closeTaskModal.bind(this)
        this.setOpenModalState = this.setOpenModalState.bind(this)
        this.handleDatePick = this.handleDatePick.bind(this)


    }



    componentDidMount() {
        axios.get(`/api/tasks`)
          .then(res => {
            this.setState({
                tasks: res.data,
            })
            this.setOpenModalState();
          }) 

          axios.get(`/api/user`)
          .then(res => {
            this.setState({
                user: res.data,
                newTask: {
                    user_id: res.data.id,
                    title: "",
                    due_to: formatDate(new Date().toLocaleDateString())
                },
            })
          })

        }

     
      

    setOpenModalState () {
        let obj = {};

            this.state.tasks.forEach((task) => {
                let key_name = "open_"+task.id;
                obj[key_name] = false;
            });  
                  
            this.setState({taskModalOpen: obj});  
    }   


    openTaskModal (id) {
        let key = "open_"+id;
        let taskModalOpen = {...this.state.taskModalOpen}
        taskModalOpen[key] = true;
        this.setState({taskModalOpen: taskModalOpen })
    }

    closeTaskModal (id) {
        let key = "open_"+id;
        let taskModalOpen = {...this.state.taskModalOpen}
        taskModalOpen[key] = false;
        this.setState({taskModalOpen: taskModalOpen })    }


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
                date: moment().locale('pt-br').add((this.state.daysForward) +1, 'days').format('LL')
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
     

   handleDelete(id) {
    axios.delete('/api/tasks/' + id);
    axios.get(`/api/tasks`)
            .then(res => {
            this.setState({
                 tasks: res.data
                 })
            });
    this.closeTaskModal(id);
    this.setOpenModalState ();  
   }

   handleDatePick(date, pickedDate) {
    let splited = pickedDate.split("-");
    let day = Number(splited[2]);
    let month = splited[1].trim();
    let year = splited[0].trim();

    let days = daysFromNow(date, pickedDate).days;
    let isForward = daysFromNow(date, pickedDate).isForward;

    let daysForward = isForward ? days : 0;
    let daysBackward = isForward ? 0 : days;

    let newDate;

    if(isForward) {
        newDate = moment().locale('pt-br').add((days), 'days').format('LL')
    } else {
        newDate = moment().locale('pt-br').subtract((days), 'days').format('LL')
    }

    this.setState({
        date: newDate,
        daysForward: daysForward,
        daysBackward: daysBackward,
    });
    //date: day+ " de "+ formatMonth(month) + " de "+ year,

   }
    


    render() { 
        return (
            <div class="tasks-view-wrapper">
            <Panel />

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
                 open={this.state.taskModalOpen}
                 openTaskModal={this.openTaskModal}
                 closeTaskModal={this.closeTaskModal}
                 handleDelete={this.handleDelete}
                 user={this.state.user}
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
               

                
            </div>
            </div>
        )
    }
}

export default Tasks