import React, { Component } from 'react'



class NatalChart extends Component {

    calcChart() {

var date = "19.05.1989";
var hour = "18:00:01";

var lat = -31.5365;
var lng =  -52.2491;

var result = ephemeris.getAllPlanets(date + " " + hour, lng, lat, 0);
    
  
console.log(result);
    }

    render() {
        return (
            <div>
                <h1>Mapa Astral</h1>

            </div>
        )
    }
}

export default NatalChart
