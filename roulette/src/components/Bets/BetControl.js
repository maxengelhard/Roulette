import React from 'react'
import Balance from './Balance'
import TotalBet from './TotalBet'

class BetControl extends React.Component {
    constructor() {
        super()
        this.state ={
            balance: 1000,
            bet: 50,
        }
    }

    render(props) {
    return (
        <div style={{display: 'flex', color: 'white'}}>
        <div className='bet'>
            <Balance balance={this.state.balance}/>
            <TotalBet totalbet={this.state.bet} />
            </div>
            <div>
            <p>Winning Bet</p>
            {this.props.winner}
            </div>            
        </div>
    )
    }
}

export default BetControl

