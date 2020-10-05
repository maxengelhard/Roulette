import React from 'react'

const Bets = (props) => {
    let theirBets = []
    if (props.bets.bets) {
        theirBets = props.bets.bets.filter(obj => {
            if (Object.values(obj)[0] > 0) {
                return (
                    true
                )
            } else return false
        })
        
    } 

    const final = theirBets.map((obj,index) => {
        return (
        <div key={index} className='thisBet'>{Object.keys(obj)[0]} {Object.values(obj)[0]}</div>
        )
    })

    return (
        <div className='bets'>
            <div className='betHeader'>Your Bets</div>
          {final}
        </div>
    )
}

export default Bets
