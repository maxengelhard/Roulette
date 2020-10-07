import React from 'react'
import RoulletWheel from './Wheel/RoulletWheel'
import SpinButton from './Wheel/SpinButton'


const WheelControl = (props) => {
        const spinStyle = {
            transition: 'all 10s ease-out',
            transform: `rotate(${props.degWheel}deg)`
        }

        const ballStyle = {
            transition: 'all 10s ease-out',
            transform: `rotate(-${props.degBall}deg)`,
        }

        
    return (
        <div>
            <RoulletWheel className='box' style={props.spinning ? spinStyle : {}} ballStyle={props.spinning ? ballStyle: {}}/>
            <SpinButton handleClick={props.handleClick} disabled={props.spinning}/>
        </div>
    )
}

export default WheelControl
