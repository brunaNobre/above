import React, { Component } from 'react';
import NewTaskDialog from '../components/layouts/NewTaskDialog';
import formatDate from '../utils/formatDate';
import MoonsMood from '../components/Moods/MoonsMood';
import AllMoods from '../components/Moods/AllMoods';
import getPhase from '../utils/getPhase';
import moonSign from '../utils/moonSign';


class UserMood extends Component {
    constructor() {
        super()
        this.state = {
            newTask: {
                user_id: 0,
                title: "",
                due_to: formatDate(new Date().toLocaleDateString())
            },
            feellings: {},
            feellingSelected: "",
            userMoods: {},
            userFeellings: {},
            userFeellingsNew: {},
            userFeellingsWax: {},
            userFeellingsFull: {},
            userFeellingsWan: {},
            allFeellingsNew: {},
            allFeellingsWax: {},
            allFeellingsFull: {},
            allFeellingsWan: {},
            dayFeellings: {},
        }

        this.handleAdd = this.handleAdd.bind(this)    
        this.sendInputValue = this.sendInputValue.bind(this)
        this.addNewFeelling = this.addNewFeelling.bind(this)
        this.selectFeelling = this.selectFeelling.bind(this)

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

          axios.get(`/api/user-moods`)
          .then(res => {
              this.setState({userMoods: res.data});
          }); 

          let day = formatDate(new Date().toLocaleDateString())
          axios.get(`/api/day-feellings?day=`+ day)
          .then(res => {
             this.setState({dayFeellings: res.data});

          }); 

          axios.get(`/api/feellings`)
          .then(res => {
              this.setState({feellings: res.data});
          }); 

          axios.get(`/api/user-feellings`)
          .then(res => {
              this.setState({userFeellings: res.data});
          }); 

          axios.get(`/api/user-feellings-new`)
          .then(res => {
              this.setState({userFeellingsNew: res.data});
          }); 

          axios.get(`/api/user-feellings-waxing`)
          .then(res => {
              this.setState({userFeellingsWax: res.data});
          }); 

          axios.get(`/api/user-feellings-full`)
          .then(res => {
              this.setState({userFeellingsFull: res.data});
          }); 

          axios.get(`/api/user-feellings-waning`)
          .then(res => {
              this.setState({userFeellingsWan: res.data});
          }); 

          axios.get(`/api/feellings-new`)
          .then(res => {
              this.setState({allFeellingsNew: res.data});
          }); 

          axios.get(`/api/feellings-waxing`)
          .then(res => {
              this.setState({allFeellingsWax: res.data});
          }); 

          axios.get(`/api/feellings-full`)
          .then(res => {
              this.setState({allFeellingsFull: res.data});
          }); 

          axios.get(`/api/feellings-waning`)
          .then(res => {
              this.setState({allFeellingsWan: res.data});
          }); 

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

    selectFeelling (feelling) {
        this.setState({feellingSelected: feelling})
    }

    addNewFeelling () {
       const mood = {
            day: formatDate(new Date().toLocaleDateString()),
            moon_phase: getPhase(),
            moon_sign: moonSign(new Date().toLocaleDateString()),
            feelling: this.state.feellingSelected

        }

        axios.post('/api/moods', mood).then(res => console.log(res.data));

        axios.get(`/api/day-feellings?day=`+ mood.day)
        .then(res => {
           this.setState({dayFeellings: res.data});

        }); 

        axios.get(`/api/feellings`)
          .then(res => {
              this.setState({feellings: res.data});
          }); 

          axios.get(`/api/user-feellings`)
          .then(res => {
              this.setState({userFeellings: res.data});
          }); 

          axios.get(`/api/user-feellings-new`)
          .then(res => {
              this.setState({userFeellingsNew: res.data});
          }); 

          axios.get(`/api/user-feellings-waxing`)
          .then(res => {
              this.setState({userFeellingsWax: res.data});
          }); 

          axios.get(`/api/user-feellings-full`)
          .then(res => {
              this.setState({userFeellingsFull: res.data});
          }); 

          axios.get(`/api/user-feellings-waning`)
          .then(res => {
              this.setState({userFeellingsWan: res.data});
          }); 

          axios.get(`/api/feellings-new`)
          .then(res => {
              this.setState({allFeellingsNew: res.data});
          }); 

          axios.get(`/api/feellings-waxing`)
          .then(res => {
              this.setState({allFeellingsWax: res.data});
          }); 

          axios.get(`/api/feellings-full`)
          .then(res => {
              this.setState({allFeellingsFull: res.data});
          }); 

          axios.get(`/api/feellings-waning`)
          .then(res => {
              this.setState({allFeellingsWan: res.data});
          }); 


    }

    render() {
        return (
            <div className="usermood-view">
               <h1>Meu Mood</h1>
               <p className="subtitle">Como eu me sinto quando...</p>
               <AllMoods
                userFeellings={this.state.userFeellings}
                dayFeellings={this.state.dayFeellings}
                feellings={this.state.feellings}
                addNewFeelling={this.addNewFeelling}
                selectFeelling={this.selectFeelling}    
                /> 
               <MoonsMood
                userFeellingsNew={this.state.userFeellingsNew}
                userFeellingsWax={this.state.userFeellingsWax}
                userFeellingsFull={this.state.userFeellingsFull}
                userFeellingsWan={this.state.userFeellingsWan}
                allFeellingsNew={this.state.allFeellingsNew}
                allFeellingsWax={this.state.allFeellingsWax}
                allFeellingsFull={this.state.allFeellingsFull}
                allFeellingsWan={this.state.allFeellingsWan}
                userMoods={this.state.userMoods}
               /> 
               <NewTaskDialog
                newTask={this.state.newTask} 
                sendInputValue={this.sendInputValue}
                handleAdd={this.handleAdd}
                />
            </div>
        )
    }
}

export default UserMood





