import React, { Component } from 'react'
import PlanetCard from '../components/Planets/PlanetCard'


class Planets extends Component {
    constructor() {
        super()
        this.state = {
            planets: []
        }
    }

    componentDidMount() {
        axios.get(`/api/planets`)
          .then(res => {
             this.setState({planets: res.data})
          })

    }
    

    render() {
        const planetCards =  this.state.planets.map(
            planet => <PlanetCard key={planet.id} name={planet.name} description={planet.description} />
            )

        return (
            <div className="planets-view">
              {planetCards}
            </div>
        )
    }
}

export default Planets