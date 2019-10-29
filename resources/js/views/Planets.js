import React, { Component } from 'react'
import PlanetCard from '../components/Planets/PlanetCard'
import NewTaskDialog from '../components/layouts/NewTaskDialog'
import formatDate from '../utils/formatDate'


class Planets extends Component {
    constructor() {
        super()
        this.state = {
            planets: [],
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
        axios.get(`/api/planets`)
          .then(res => {
             this.setState({planets: res.data})
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
        const planetCards =  this.state.planets.map(
            planet =>  <PlanetCard key={planet.id} name={planet.name} description={planet.description} image={`/images/planets/${planet.id}.jpg`}/>
            )

        return (
            <div className="planets-view">
              {planetCards}
              <NewTaskDialog
                newTask={this.state.newTask} 
                sendInputValue={this.sendInputValue}
                handleAdd={this.handleAdd}
                />
            </div>
        )
    }
}

export default Planets