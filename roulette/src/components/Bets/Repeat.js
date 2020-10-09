import React from 'react'

const Repeat = (props) => {
    const repeat = props.repeat ? 'Repeat' : 'Double'
    const click = props.repeat ? () => props.repeatBet() : () => props.double()
    return (
        <button onClick={click}>
            {repeat}
        </button>
    )
}

export default Repeat
