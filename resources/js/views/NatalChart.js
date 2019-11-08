import React, { Component } from 'react'
import NewTaskDialog from '../components/layouts/NewTaskDialog'
import formatDate from '../utils/formatDate'
import ChartTable from '../components/Chart/ChartTable'
import CircularProgress from '@material-ui/core/CircularProgress';

class NatalChart extends Component {
    constructor() {
        super()
        this.state = {
            newTask: {
                user_id: 0,
                title: "",
                due_to: formatDate(new Date().toLocaleDateString())
            },
            user: {},
            chart: {},
            dob: "",
            tob: "",
            lat: "",
            lon: "",
            tz: 0,
            err: "",
        }

        this.handleAdd = this.handleAdd.bind(this)    
        this.sendInputValue = this.sendInputValue.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.renderForm = this.renderForm.bind(this)
        this.renderChart = this.renderChart.bind(this)
        this.onDateChange = this.onDateChange.bind(this)
        this.onHourChange = this.onHourChange.bind(this)
        this.onLatChange = this.onLatChange.bind(this)
        this.onLongChange = this.onLongChange.bind(this)
        this.onZoneChange = this.onZoneChange.bind(this)
    }

    componentDidMount() {


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

        axios.get(`/api/chart`)
        .then(res => this.setState({chart: res.data}))
     
        

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

    handleClick() {

        if(this.state.dob && this.state.tob && this.state.lat && this.state.lon && this.state.tz) {

            let chart = {
                sun: "",
                rising_sign: "",
                moon: "",
                mercury: "",
                venus: "",
                mars: "",
                jupiter: "",
                saturn: "",
                uranus: "",
                neptune: "",
                pluto: "",
                mc: ""
            }
    
            let dob = this.state.dob;
            let tob = this.state.tob;
            let lat = this.state.lat;
            let lon = this.state.lon;
            let tz = this.state.tz;
            let api_key = '1195d269-1076-501a-bc83-fa8897a35c68';
            fetch(`https://api.vedicastroapi.com/json/horoscope/western?dob=${dob}&tob=${tob}&lat=${lat}&lon=${lon}&tz=${tz}&api_key=${api_key}`, { mode: 'cors' })
            .then(res => res.json())
            .then((res) => {
                chart.sun = res.response.sun.zodiac;
                chart.rising_sign = res.response.ascendant.zodiac;
                chart.moon = res.response.moon.zodiac;
                chart.mercury = res.response.mercury.zodiac;
                chart.venus = res.response.venus.zodiac;
                chart.mars = res.response.mars.zodiac;
                chart.jupiter = res.response.jupiter.zodiac;
                chart.saturn = res.response.saturn.zodiac;
                chart.uranus = res.response.uranus.zodiac;
                chart.neptune = res.response.neptune.zodiac;
                chart.pluto = res.response.pluto.zodiac;
                chart.mc = res.response.south_node.zodiac;
    
                //this.setState({chart: chart})
                axios.post('/api/chart', chart).then(res => console.log(res.data));
                
                axios.get(`/api/chart`)
                .then(res => this.setState({chart: res.data}))
    
    
            }).catch(e => console.log(e));

        } else {
            this.setState({err: "Preencha todos os campos :)"});
        }

    }


    onDateChange(text) {
        let spl = text.split('-');
        let fText = `${spl[2]}/${spl[1]}/${spl[0]}`;
        this.setState({dob: fText, err: ""});
    }

    onHourChange(text) {
        this.setState({tob: text, err: ""});
    }

    onLatChange(text) {
        this.setState({lat: text, err: ""});
    }

    onLongChange(text) {
        this.setState({lon: text, err: ""});
    }

    onZoneChange(text) {
        let tz = Number(text);
        this.setState({tz: tz, err: ""});
    }

    renderForm() {

        if(this.state.chart == -1) {

            return (
                <>
                <h1 className="new-chart">Faça seu mapa astral</h1>
    
                <div className="form-group">
                <label>Data de nascimento:</label>
                <input onChange={(e) => {this.onDateChange(e.target.value)}} id="date" type="date" required></input>
                </div>
    
                <div className="form-group">
                <label>Horário do nascimento:</label>
                <input onChange={(e) => {this.onHourChange(e.target.value)}} type="time" id="appt" name="appt" min="00:00" max="23:59" required></input>
                </div>
    
    
                <h3 className="birth-place">Local do nascimento</h3>
    
                <div className="form-group">
                <label>Latitude:</label> 
                <input onChange={(e) => {this.onLatChange(e.target.value)}} id="lat" type="text" required></input>
                </div>
    
                <div className="form-group">
                <label>Longitude:</label>
                <input onChange={(e) => {this.onLongChange(e.target.value)}} id="lon" type="text" required></input>
                </div>
    
                <div className="form-group">
                <label >Time Zone:</label>
                <input onChange={(e) => {this.onZoneChange(e.target.value)}} id="tz" type="text" required></input>
                </div>
    
                <button className="calc" onClick={this.handleClick}>Pronto!</button>
    
                <p className="err">{this.state.err}</p>
    
                </>
            )

        } else {
           return <CircularProgress className="loading"/>
        }


    }

    renderChart() {
        return (
            <>
            <h1 className="your-chart">Seu mapa astral</h1>
            <ChartTable chart={this.state.chart}/>
            </>
        )

    }


    render() {
        return (
            <div className="natal-chart-view">
                {(this.state.chart.sun) ? this.renderChart() : this.renderForm()}
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
