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
            },
            is_retrograde: false,
        }

        this.handleAdd = this.handleAdd.bind(this)    
        this.sendInputValue = this.sendInputValue.bind(this)
        this.click = this.click.bind(this)


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

    click() {

        fetch('https://mercuryretrogradeapi.com?date=2016-09-14', { mode: 'cors' }).then(res => res.json()).then(({is_retrograde}) => {this.setState({is_retrograde: is_retrograde}); console.log(is_retrograde)})
}

    render() {
        return (
            <div>
                <h1 onClick={this.click}>click</h1>
                <p>is retrograde? {(this.state.is_retrograde) ? "sim" :  "nao"}</p>
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
