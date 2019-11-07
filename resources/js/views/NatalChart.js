import React, { Component } from 'react'
import NewTaskDialog from '../components/layouts/NewTaskDialog'
import formatDate from '../utils/formatDate'



class NatalChart extends Component {
    constructor() {
        super()
        this.state = {
            newTask: {
                user_id: 0,
                title: "",
                due_to: formatDate(new Date().toLocaleDateString())
            }
        }

        this.handleAdd = this.handleAdd.bind(this)    
        this.sendInputValue = this.sendInputValue.bind(this)
       

    }

    componentDidMount() {
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

        axios.get('https://mercuryretrogradeapi.com?date=2016-09-14')
        .then(res => console.log(res))

      }

      handleAdd (newTask) {
        if(newTask.title) {
            axios.post('/api/tasks', newTask);

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

    render() {
        return (
            <div>
                <h1>Mapa Astral</h1>
                <NewTaskDialog
                newTask={this.state.newTask} 
                sendInputValue={this.sendInputValue}
                handleAdd={this.handleAdd}
                />

            </div>
        )
    }
}

export default NatalChart
