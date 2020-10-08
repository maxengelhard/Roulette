import React from 'react'

const TotalBet = (props) => {
    const label = props.finished ? 'LAST WIN': 'Total Bet' 
    return (
        <div className='totalBet'>
            <p>{label} <br/> {props.totalBet}</p>
        </div>
    )
}

export default TotalBet
