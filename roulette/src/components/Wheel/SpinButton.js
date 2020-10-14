import React from 'react'


const SpinButton = (props) => {
    return (
        <button onClick={() => props.handleClick()} disabled={props.disabled}>
            Spin
        </button> 
    )
}

export default SpinButton

