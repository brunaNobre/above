import React from 'react'

function AbvGreeting (props) {
    return (
        <p className="abv-greeting">Olá, <span>{props.firstName}</span></p>
    );
}

export default AbvGreeting