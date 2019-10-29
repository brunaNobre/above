import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';


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
    
        <div className="moon-header">
    
            <h1>Lua em Escorpião</h1>
            <Link
             to={`/home/moons#${phase.toLocaleLowerCase()}`}><p>Fase {phase}</p>
             </Link>
            
        
        </div>
    )
}



export default MoonPhaseHeader