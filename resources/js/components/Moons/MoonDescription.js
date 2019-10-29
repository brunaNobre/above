import React from 'react'
import DecorBorder from '../DecorBorder'

function MoonDescription (props) {
    return (
        <div className="moon-description">
            <DecorBorder img={props.img}>
                <h1 id={(props.phase).toLowerCase()}>Lua {props.phase}</h1>
                <p>{props.description}</p>
            </DecorBorder>
        </div>
    )
}

export default MoonDescription