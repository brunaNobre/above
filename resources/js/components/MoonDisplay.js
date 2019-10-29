import React from 'react'
import formatDate from '../utils/formatDate'
import getPhase from '../utils/getPhase'


function MoonDisplay (props) {
    var today_date = new Date(formatDate(new Date().toLocaleDateString()))
    const phase = getPhase(today_date);

    let phase_pt_br = "";

    switch (phase) {
        case "new":
        phase_pt_br = "nova";
        break;
        case "waxing":
        phase_pt_br = "crescente";
        break;
        case "full":
        phase_pt_br = "cheia";
        break;
        default:
        phase_pt_br = "minguante";
        break;
    }

    return (
    
    <img className="moon-display"
        src={`/images/phases/${phase}.png`}
        alt={`Lua na fase ${phase_pt_br}`}
        title={`Lua na fase ${phase_pt_br}`} />
    )
}

export default MoonDisplay