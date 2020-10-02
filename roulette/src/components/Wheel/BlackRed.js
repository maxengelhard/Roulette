import React from 'react'


const BlackRed = (props) => {
    return (
    <div className={props.className} style={props.style}>
        <span className={props.span}><p>{props.number}</p><area shape='poly' alt={props.id}></area></span>
    </div>
    )
}

export default BlackRed
