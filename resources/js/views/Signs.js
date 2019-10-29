import React, { Component } from 'react'
import SignCard from '../components/Signs/SignCard'
import NewTaskDialog from '../components/layouts/NewTaskDialog'
import formatDate from '../utils/formatDate'


class Signs extends Component {
    constructor() {
        super()
        this.state = {
            signs: [],
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
        axios.get(`/api/signs`)
          .then(res => {
             this.setState({signs: res.data})
          })
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

    render() {
        const signCards =  this.state.signs.map(
            sign => <SignCard key={sign.id} name={sign.name} description={sign.description} image={`/images/signs/${sign.id}.jpg`}/>
        )

        return (
            <div className="signs-view">
              {signCards}
              <NewTaskDialog
                newTask={this.state.newTask} 
                sendInputValue={this.sendInputValue}
                handleAdd={this.handleAdd}
                />
            </div>
        )
    }
}

export default Signs