import React, { Component } from 'react'
import MoonDescription from '../components/Moons/MoonDescription'
import DecorBorder from '../components/DecorBorder'


class Moons extends Component {
    constructor() {
        super()
        this.state = {
            moons: []
        }
    }

    componentDidMount() {
        axios.get(`/api/moons`)
          .then(res => {
             this.setState({moons: res.data})
          })
    }


    render() {

        const moonDescriptions =  this.state.moons.map(
            moon => <MoonDescription 
                    key={moon.id}
                    img="/images/moons/new-moon.png" 
                    phase={moon.phase} 
                    description={moon.description} />
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

                 
            </div>
        )
    }
}

export default Moons