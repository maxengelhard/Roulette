import React from 'react'
import BlackRed from './BlackRed'
import rotations from './rotations'
import numbers from './numbers'


const RoulletWheel = (props) => {
    const wheel = rotations.map((deg, key) => 
    <BlackRed 
        key={key} 
        className={`box${key+1}`}
        span={key%2===0 ? 'span1': 'span2'}
        number={numbers[key]}
        style={{
            width: '100%', 
            height: '100%',
            transform: `translateY(-${100*key}%) rotate(${deg}deg)`,}}
        />)
    return (
        <div className="mainbox">
            <div className={props.className}>
               {wheel}
            </div>
        </div>
    )
}

export default RoulletWheel
