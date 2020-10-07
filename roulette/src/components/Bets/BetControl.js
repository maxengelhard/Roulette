import React from 'react'
import Balance from './Balance'
import TotalBet from './TotalBet'



const BetControl = (props)  => {
    
    return (
        <div className='betControl'>
            <Balance balance={props.balance}/>
            <TotalBet totalBet={props.totalBet} />
            <div>
            <p>Winning Bet</p>
            {props.winner}           
        </div>
        </div>
    )
}

export default BetControl

