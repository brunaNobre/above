import React, { Component } from 'react'
import AbvCalendar from '../AbvCalendar'
import Panel from '../Panel'
import MoonHeader from '../MoonHeader'


class AboveMainContent extends Component {
    render() {
        return (
            <div>
                <Panel />
                <MoonHeader />
                <AbvCalendar />
            </div>
        )
    }
}

export default AboveMainContent