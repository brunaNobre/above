import React from 'react'


function AbvPercentageBar (props) {
    return (
        <div className="abv-percentage-bar-wrapper">
            <div className="abv-percentage-bar" style={{width: props.percentage}}></div>
            {props.percentage}
        </div>
    )
}

export default AbvPercentageBar