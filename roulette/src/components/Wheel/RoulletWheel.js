import React from 'react'
import BlackRed from './BlackRed'
import rotations from './rotations'
import numbers from './numbers'
import Ball from './Ball'

const RoulletWheel = (props) => {
    const wheel = rotations.map((deg, key) => 
    <BlackRed 
        key={key} 
        id={numbers[key]}
        className={`box${key+1}`}
        span={key%2===0 ? 'span1': 'span2'}
        number={numbers[key]}
        style={{
            width: '100%', 
            height: '100%',
            transform: `translateY(-${100*key}%) rotate(${deg}deg)`,}}
        place = {props.place}
        />)
        

    return (
        <div className="mainbox">
            <div className={props.className} style={props.style}>
               {wheel}
            </div>
            <Ball style={props.ballStyle}/>
        </div>
    )
}

export default RoulletWheel
