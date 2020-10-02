import React from 'react'
import BetAmount from './BetAmount'
import Balance from './Balance'

class BetControl extends React.Component {
    constructor() {
        super()
        this.state ={
            betAmount: 0,
            balance: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {

    }

    render(props) {
    return (
        <div className='bet'>
            <Balance balance={this.state.balance}/>
            <BetAmount />
            {this.props.winner}
            
        </div>
    )
    }
}

export default BetControl

