import React, { Component } from 'react'
import SignCard from '../components/Signs/SignCard'


class Signs extends Component {
    render() {
        return (
            <div className="signs-view">
                <SignCard />
                <SignCard />
                <SignCard />
                <SignCard />
                <SignCard />
            </div>
        )
    }
}

export default Signs