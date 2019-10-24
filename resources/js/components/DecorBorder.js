import React from 'react'

function DecorBorder (props) {
    return (
        <div className="decor-border">
            <img src={props.img} className="border-img"></img>
            {props.children}
        </div>
    )
}

export default DecorBorder