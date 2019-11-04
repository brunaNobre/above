import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';


function MoonPhaseHeader (props) {
    let phase = "";
    let moonsign = "";

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

    switch(props.moonsign) {
        case "aries":
        moonsign = "Áries";
        break;
        case "taurus":
        moonsign = "Touro";
        break;
        case "gemini":
        moonsign = "Gêmeos";
        break;
        case "cancer":
        moonsign = "Câncer";
        break;
        case "leo":
        moonsign = "Leão";
        break;
        case "virgo":
        moonsign = "Virgem";
        break;
        case "libra":
        moonsign = "Libra";
        break;
        case "scorpio":
        moonsign = "Escorpião";
        break;
        case "sagitarius":
        moonsign = "Sagitário";
        break;
        case "capricorn":
        moonsign = "Capricórnio";
        break;
        case "aquarius":
        moonsign = "Aquário";
        break;
        default:
        moonsign = "Peixes";
        break;
    }

    return (
    
        <div className="moon-header">
    
            <h1>Lua em {moonsign}</h1>
            <Link
             to={`/home/moons#${phase.toLocaleLowerCase()}`}><p>Fase {phase}</p>
             </Link>
            
        
        </div>
    )
}



export default MoonPhaseHeader