import React, { Component } from 'react'
import DecorBorder from '../components/DecorBorder'
import NewTaskDialog from '../components/layouts/NewTaskDialog'
import formatDate from '../utils/formatDate'
import TodayChartTable from '../components/TodaySky/TodayChartTable'


class TodaySky extends Component {
    constructor() {
        super()
        this.state = {
            newTask: {
                user_id: 0,
                title: "",
                due_to: formatDate(new Date().toLocaleDateString())
            },
            chart:  {
                sun: "Escorpião",
                moon: "Áries",
                mercury: "Escorpião",
                venus: "Sagitário",
                mars: "Libra",
                jupiter: "Sagitário",
                saturn: "Capricórnio",
                uranus: "Touro",
                neptune: "Peixes",
                pluto: "Capricórnio",
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
            <div className="todaysky-view">
               <DecorBorder img="/images/cosmos.png">
                    <h1>Céu de Hoje</h1>
                    <p>Veja em quais signos os astros estão transitando no dia de hoje.</p>
               </DecorBorder>
               <TodayChartTable chart={this.state.chart}/>
               <NewTaskDialog
                newTask={this.state.newTask} 
                sendInputValue={this.sendInputValue}
                handleAdd={this.handleAdd}
                />
            </div>
        )
    }
}

export default TodaySky