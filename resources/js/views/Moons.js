import React, { Component } from 'react'
import MoonDescription from '../components/Moons/MoonDescription'
import DecorBorder from '../components/DecorBorder'
import NewTaskDialog from '../components/layouts/NewTaskDialog'
import formatDate from '../utils/formatDate'


class Moons extends Component {
    constructor() {
        super()
        this.state = {
            moons: [],
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
        axios.get(`/api/moons`)
          .then(res => {
             this.setState({moons: res.data})
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

        const moonDescriptions =  this.state.moons.map(
            moon => <MoonDescription key={moon.id} img={`/images/moons/${moon.id}.png`} phase={moon.phase} description={moon.description} />
            )


        return (
            <div className="moons-view">
                <div className="page-description-wrapper">
                    <DecorBorder img="/images/moons/phases.png">
                        <h1 className="page-title">As Fases da Lua</h1>
                        <p className="page-description">As fases da Lua representam os diferentes aspectos que vemos o satélite natural da Terra ao longo de um ciclo. Isso acontece em virtude da variação da sua posição em relação ao nosso planeta e ao Sol.</p>
                    </DecorBorder>
                </div>

                {moonDescriptions}
                <NewTaskDialog
                newTask={this.state.newTask} 
                sendInputValue={this.sendInputValue}
                handleAdd={this.handleAdd}
                />
                 
            </div>
        )
    }
}

export default Moons