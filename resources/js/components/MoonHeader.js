import React from 'react'

function MoonPhaseHeader (props) {

    let phase = "";

    switch (props.phase) {
        case "new":
        phase = "Nova";
        break;
        case "waxing":
        phase = "Crescente";
        break;
        case "full":
        phase = "Cheia";
        break;
        default:
        phase = "Minguante";
        break;
    }

    return (
    
        <div className="abvr-moon-phase-header">
    
            <h1>Lua em Escorpião</h1>
            <p>Fase {phase}</p>
        
        </div>
    )
}



export default MoonPhaseHeader