import React, { Component } from 'react'
import MoonDescription from '../components/Moons/MoonDescription'
import DecorBorder from '../components/DecorBorder'


class Moons extends Component {
    render() {
        return (
            <div className="moons-view">
                <div className="page-description-wrapper">
                    <DecorBorder img="/images/moons/phases.png">
                        <h1 className="page-title">As Fases da Lua</h1>
                        <p className="page-description">As fases da Lua representam os diferentes aspectos que vemos o satélite natural da Terra ao longo de um ciclo. Isso acontece em virtude da variação da sua posição em relação ao nosso planeta e ao Sol.</p>
                    </DecorBorder>
                </div>

                <MoonDescription
                 img="/images/moons/new-moon.png"
                 title="Lua Nova"
                 description="daiosdi joiahdoidho oihdoidho ahuhiaduhashdhiuad daiosdi joiahdoidho oihdoidho ahuhiaduhashdhiuad daiosdi joiahdoidho oihdoidho ahuhiaduhashdhiuad daiosdi joiahdoidho oihdoidho ahuhiaduhashdhiuad"/>

                 <MoonDescription
                 img="/images/moons/waxing-moon.png"
                 title="Lua Crescente"
                 description="daiosdi joiahdoidho oihdoidho ahuhiaduhashdhiuad"/>

                  <MoonDescription
                 img="/images/moons/full-moon.png"
                 title="Lua Cheia"
                 description="daiosdi joiahdoidho oihdoidho ahuhiaduhashdhiuad"/>

                  <MoonDescription
                 img="/images/moons/waning-moon.png"
                 title="Lua Minguante"
                 description="daiosdi joiahdoidho oihdoidho ahuhiaduhashdhiuad"/>
            </div>
        )
    }
}

export default Moons