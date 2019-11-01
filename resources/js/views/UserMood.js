import React, { Component } from 'react'
import NewTaskDialog from '../components/layouts/NewTaskDialog'
import formatDate from '../utils/formatDate'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MoonsMood from '../components/Moods/MoonsMood'
import AllMoods from '../components/Moods/AllMoods'

class UserMood extends Component {
    constructor() {
        super()
        this.state = {
            newTask: {
                user_id: 0,
                title: "",
                due_to: formatDate(new Date().toLocaleDateString())
            },
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
            date: formatDate(new Date().toLocaleDateString())
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

          axios.get(`/api/day-feellings`)
          .then(res => {
             this.setState({dayFeellings: res.data});

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

    click () {
       const mood = {
            user_id: this.props.user,
            day: '2019-11-10',
            moon_phase: "new",
            moon_sign: "libra"

        }

        axios.post('/api/moods', mood);
    }

    render() {   
        return (
            <div className="usermood-view">
               <h1 onClick={this.click}>Meu Mood</h1>
               <p className="subtitle">Como eu me sinto quando...</p>
               <AllMoods
                userFeellings={this.state.userFeellings}
                dayFeellings={this.state.dayFeellings}    
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