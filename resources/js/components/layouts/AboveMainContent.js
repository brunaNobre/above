import React, { Component } from 'react'
import Panel from '../Panel'
import MoonHeader from '../MoonHeader'
import formatDate from '../../utils/formatDate'
import getPhase from '../../utils/getPhase'



class AboveMainContent extends Component {
    constructor() {
        super()
        this.state = {
            phase: ""
        }
    }

    componentDidMount() {
        var today_date = new Date(formatDate(new Date().toLocaleDateString()))
        this.setState({phase: getPhase(today_date)})  
    }

    render() {
        return (
            <div>
                <Panel />
                <MoonHeader phase={this.state.phase}/>
            </div>
        )
    }
}

export default AboveMainContent