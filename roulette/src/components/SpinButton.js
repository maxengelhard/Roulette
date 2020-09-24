import React from 'react'



const SpinButton = (props) => {
    return (
        <button onClick={() => props.handleClick()}>
            Spin
        </button>
    )
}

export default SpinButton

