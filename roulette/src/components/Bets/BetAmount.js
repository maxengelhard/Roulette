import React from 'react'

const BetAmount = (props) => {
    return (
        <div className='betAmount'>
            <p>Bet Amount</p>
            <input type="number" value={props.value} onChange={props.onChange} />
        </div>
    )
}

export default BetAmount
