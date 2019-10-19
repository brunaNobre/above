import React, { Component } from 'react'
import PlanetCard from '../components/Planets/PlanetCard'


class Planets extends Component {
    render() {
        return (
            <div className="planets-view">
                <PlanetCard />
            </div>
        )
    }
}

export default Planets