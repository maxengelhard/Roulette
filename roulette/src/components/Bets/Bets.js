import React from 'react'

const Bets = (props) => {
    let head = []
    for (let key in props.bets.bet) {
        head.push(key,props.bets.bet[key])
    }
    
    return (
        <div className='bets'>
            {head}
        </div>
    )
}

export default Bets
